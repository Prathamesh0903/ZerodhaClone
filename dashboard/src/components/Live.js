import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Live.css';

// Register Chart.js components
Chart.register(...registerables);

const Live = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [timeRange, setTimeRange] = useState('1d');
  const [isLoading, setIsLoading] = useState(true);
  const [marketStatus, setMarketStatus] = useState('open');
  const [watchlist, setWatchlist] = useState([]);
  const socketRef = useRef(null);

  // Mock API data - replace with actual API calls
  const fetchStockData = async (symbol, range) => {
    setIsLoading(true);
    try {
      // In a real app, you would fetch from your API
      // const response = await fetch(`https://api.yourdomain.com/stocks/${symbol}?range=${range}`);
      // const data = await response.json();

      // Mock data for demonstration
      const mockData = {
        symbol: symbol || 'RELIANCE',
        name: symbol ? `${symbol} Company` : 'Reliance Industries',
        currentPrice: (Math.random() * 2000 + 1000).toFixed(2),
        change: (Math.random() * 20 - 10).toFixed(2),
        changePercent: (Math.random() * 5 - 2.5).toFixed(2),
        volume: Math.floor(Math.random() * 1000000),
        data: generateMockChartData(range)
      };

      if (symbol) {
        setSelectedStock(mockData);
      } else {
        setStocks(prev => [...prev, mockData]);
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Generate mock chart data
  const generateMockChartData = (range) => {
    const points = range === '1d' ? 24 : range === '1w' ? 7 : range === '1m' ? 30 : 365;
    return Array.from({ length: points }, (_, i) => ({
      time: range === '1d' ? `${i}:00` : `Day ${i + 1}`,
      price: (Math.random() * 2000 + 1000).toFixed(2)
    }));
  };

  // Connect to WebSocket for real-time data
  const connectWebSocket = () => {
    // In a real app, you would connect to your WebSocket endpoint
    // socketRef.current = new WebSocket('wss://api.yourdomain.com/live');

    // Mock WebSocket behavior
    socketRef.current = {
      onmessage: (event) => {
        // Mock real-time updates
        const updatedStocks = stocks.map(stock => ({
          ...stock,
          currentPrice: (parseFloat(stock.currentPrice) + (Math.random() * 10 - 5)).toFixed(2)
        }));
        setStocks(updatedStocks);
        
        if (selectedStock) {
          const updatedSelected = updatedStocks.find(s => s.symbol === selectedStock.symbol);
          if (updatedSelected) setSelectedStock(updatedSelected);
        }
      }
    };

    // Mock sending initial data
    setTimeout(() => {
      if (socketRef.current.onmessage) {
        socketRef.current.onmessage({ data: JSON.stringify({ type: 'initial' }) });
      }
    }, 1000);

    // Mock continuous updates
    const interval = setInterval(() => {
      if (socketRef.current.onmessage) {
        socketRef.current.onmessage({ data: JSON.stringify({ type: 'update' }) });
      }
    }, 5000);

    return () => clearInterval(interval);
  };

  // Initialize data
  useEffect(() => {
    const popularStocks = ['RELIANCE', 'TCS', 'HDFCBANK', 'INFY', 'HINDUNILVR'];
    popularStocks.forEach(stock => fetchStockData(stock, timeRange));
    fetchStockData(null, timeRange); // For the selected stock
    
    connectWebSocket();

    // Check market hours (mock)
    const now = new Date();
    const hours = now.getHours();
    setMarketStatus(hours >= 9 && hours < 15 ? 'open' : 'closed');

    return () => {
      if (socketRef.current) {
        // In a real app: socketRef.current.close();
      }
    };
  }, []);

  // Handle time range change
  useEffect(() => {
    if (selectedStock) {
      fetchStockData(selectedStock.symbol, timeRange);
    }
  }, [timeRange]);

  // Add to watchlist
  const addToWatchlist = (stock) => {
    if (!watchlist.some(s => s.symbol === stock.symbol)) {
      setWatchlist(prev => [...prev, stock]);
    }
  };

  // Chart configuration
  const chartData = {
    labels: selectedStock?.data.map(item => item.time) || [],
    datasets: [
      {
        label: 'Price',
        data: selectedStock?.data.map(item => item.price) || [],
        borderColor: '#2962ff',
        backgroundColor: 'rgba(41, 98, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        ticks: {
          callback: function(value) {
            return '₹' + value;
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  return (
    <div className="live-container">
      <div className="market-status" data-status={marketStatus}>
        Market is {marketStatus === 'open' ? 'OPEN' : 'CLOSED'}
        {marketStatus === 'open' && (
          <span className="market-timer">Live - {new Date().toLocaleTimeString()}</span>
        )}
      </div>

      <div className="live-grid">
        {/* Main chart section */}
        <div className="chart-section">
          <div className="chart-header">
            <h2>{selectedStock ? `${selectedStock.name} (${selectedStock.symbol})` : 'Select a stock'}</h2>
            <div className="time-range-selector">
              {['1d', '1w', '1m', '1y'].map(range => (
                <button
                  key={range}
                  className={timeRange === range ? 'active' : ''}
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {selectedStock ? (
            <>
              <div className="price-display">
                <span className="current-price">₹{selectedStock.currentPrice}</span>
                <span className={`price-change ${selectedStock.change >= 0 ? 'positive' : 'negative'}`}>
                  {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change} ({selectedStock.changePercent}%)
                </span>
                <span className="volume">Vol: {selectedStock.volume.toLocaleString()}</span>
              </div>
              <div className="chart-container">
                <Line data={chartData} options={chartOptions} />
              </div>
            </>
          ) : (
            <div className="no-stock-selected">
              <p>Select a stock from the list to view detailed chart</p>
            </div>
          )}
        </div>

        {/* Stock list section */}
        <div className="stock-list-section">
          <h3>Popular Stocks</h3>
          <div className="stock-list">
            {isLoading && !stocks.length ? (
              <div className="loading">Loading stocks...</div>
            ) : (
              stocks.map(stock => (
                <div 
                  key={stock.symbol} 
                  className={`stock-item ${selectedStock?.symbol === stock.symbol ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedStock(stock);
                    setTimeRange('1d');
                  }}
                >
                  <div className="stock-info">
                    <span className="stock-symbol">{stock.symbol}</span>
                    <span className="stock-name">{stock.name}</span>
                  </div>
                  <div className="stock-price">
                    <span>₹{stock.currentPrice}</span>
                    <span className={`price-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                      {stock.change >= 0 ? '+' : ''}{stock.changePercent}%
                    </span>
                  </div>
                  <button 
                    className="watchlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWatchlist(stock);
                    }}
                  >
                    +
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Watchlist section */}
          {watchlist.length > 0 && (
            <div className="watchlist-section">
              <h3>Your Watchlist</h3>
              <div className="stock-list">
                {watchlist.map(stock => (
                  <div 
                    key={`watchlist-${stock.symbol}`}
                    className="stock-item"
                    onClick={() => {
                      setSelectedStock(stock);
                      setTimeRange('1d');
                    }}
                  >
                    <div className="stock-info">
                      <span className="stock-symbol">{stock.symbol}</span>
                    </div>
                    <div className="stock-price">
                      <span>₹{stock.currentPrice}</span>
                      <span className={`price-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.changePercent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Market overview section */}
        <div className="market-overview">
          <h3>Market Overview</h3>
          <div className="indices">
            <div className="index-card">
              <span className="index-name">NIFTY 50</span>
              <span className="index-value">19,425.35</span>
              <span className="index-change positive">+0.85%</span>
            </div>
            <div className="index-card">
              <span className="index-name">SENSEX</span>
              <span className="index-value">64,718.56</span>
              <span className="index-change positive">+0.72%</span>
            </div>
            <div className="index-card">
              <span className="index-name">NIFTY BANK</span>
              <span className="index-value">43,812.40</span>
              <span className="index-change negative">-0.15%</span>
            </div>
          </div>

          <div className="market-news">
            <h4>Latest News</h4>
            <ul>
              <li>RBI keeps repo rate unchanged at 6.5%</li>
              <li>Reliance announces new green energy initiative</li>
              <li>IT stocks rally as US Fed signals pause in rate hikes</li>
              <li>Auto sales show strong growth in festive season</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick trade panel (fixed at bottom) */}
      <div className="quick-trade-panel">
        {selectedStock ? (
          <>
            <div className="trade-stock-info">
              <span>{selectedStock.symbol}</span>
              <span>₹{selectedStock.currentPrice}</span>
              <span className={`price-change ${selectedStock.change >= 0 ? 'positive' : 'negative'}`}>
                {selectedStock.change >= 0 ? '+' : ''}{selectedStock.changePercent}%
              </span>
            </div>
            <div className="trade-actions">
              <button className="buy-btn">BUY</button>
              <button className="sell-btn">SELL</button>
              <button className="chart-btn">ADVANCED CHART</button>
            </div>
          </>
        ) : (
          <div className="select-stock-prompt">
            Select a stock to trade
          </div>
        )}
      </div>
    </div>
  );
};

export default Live;