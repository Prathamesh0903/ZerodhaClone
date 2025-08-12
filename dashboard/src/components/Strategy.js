import React, { useState } from 'react';
import './Strategy.css'; // We'll create this CSS file for styling

const Strategy = () => {
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const chartPatterns = [
    {
      id: 1,
      name: 'Head and shoulders',
      description: 'Head and shoulders is a chart pattern in which a large peak has a slightly smaller peak on either side of it. Traders look at head and shoulders patterns to predict a bullish-to-bearish reversal.Typically, the first and third peak will be smaller than the second, but they will all fall back to the same level of support, otherwise known as the "neckline". Once the third peak has fallen back to the level of support, it is likely that it will breakout into a bearish downtrend.',
      imageUrl: 'headnshoulder.png'
    },
    {
      id: 2,
      name: 'Double top',
      description: 'A double top is another pattern that traders use to highlight trend reversals. Typically, an asset’s price will experience a peak, before retracing back to a level of support. It will then climb up once more before reversing back more permanently against the prevailing trend',
      imageUrl: 'doubletop.png'
    },
    {
      id: 3,
      name: 'Double bottom',
      description: 'A double bottom is a bullish reversal pattern that forms after a downtrend. It resembles the letter "W" and signals that the selling pressure has been overcome by buying pressure.',
      imageUrl: 'doublebottom.png'
    },
    {
      id: 4,
      name: 'Rounding bottom',
      description: 'A rounding bottom is a long-term reversal pattern that signals a shift from a downtrend to an uptrend. It forms a "U" shape and indicates gradual accumulation by investors.',
      imageUrl: 'roundingbottom.png'
    },
    {
      id: 5,
      name: 'Cup and handle',
      description: 'The cup and handle is a bullish continuation pattern that marks a consolidation period followed by a breakout. The "cup" portion is a "U" shape and the "handle" is a slight downward drift.',
      imageUrl: 'cupnhandle.png'
    },
    {
      id: 6,
      name: 'Wedges',
      description: 'Wedges form as an asset\'s price movements tighten between two sloping trend lines. Rising wedges are typically bearish while falling wedges are typically bullish.',
      imageUrl: 'wedge.png'
    },
    {
      id: 7,
      name: 'Pennant or flags',
      description: 'Pennants and flags are continuation patterns that form after strong moves. They represent brief consolidations before the previous trend resumes. Pennants are small symmetrical triangles while flags are small parallelograms.',
      imageUrl: 'penat.png'
    },
    {
      id: 8,
      name: 'Ascending triangle',
      description: 'An ascending triangle is a bullish continuation pattern characterized by a flat upper trend line and a rising lower trend line. It indicates accumulation before a breakout.',
      imageUrl: 'ascending.png'
    }
  ];

  const handlePatternClick = (pattern) => {
    setSelectedPattern(pattern);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="strategy-container">
      <header className="strategy-header">
        <h1>Best Chart Patterns</h1>
      </header>
      
      <div className="pattern-list-container">
        <ol className="pattern-list">
          {chartPatterns.map((pattern) => (
            <li key={pattern.id}>
              <button 
                className="pattern-link" 
                onClick={() => handlePatternClick(pattern)}
              >
                {pattern.name}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {showPopup && selectedPattern && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>×</button>
            <h2>{selectedPattern.name}</h2>
            <img 
              src={selectedPattern.imageUrl} 
              alt={selectedPattern.name} 
              className="pattern-image"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Available';
              }}
            />
            <p className="pattern-description">{selectedPattern.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Strategy;