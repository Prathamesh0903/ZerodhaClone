# Zerodha Clone - Trading Platform

A comprehensive trading platform clone inspired by Zerodha, featuring a modern web application with real-time trading capabilities, portfolio management, and user authentication.

## 🚀 Project Overview

This project is a full-stack trading platform that replicates core features of Zerodha, including:
- User authentication and account management
- Real-time stock trading interface
- Portfolio tracking and holdings management
- Order management system
- Live market data visualization
- Responsive dashboard with charts and analytics

## 📁 Project Structure

```
ZerodhaClone/
├── frontend/                 # React.js landing page and authentication
│   ├── src/
│   │   ├── Landing_Page/     # Landing page components
│   │   └── firebase/         # Firebase configuration
│   └── package.json
├── dashboard/                # React.js trading dashboard
│   ├── src/
│   │   ├── components/       # Dashboard components
│   │   └── data/            # Static data and configurations
│   └── package.json
├── backend/                  # Node.js/Express API server
│   ├── model/               # MongoDB schemas
│   ├── schemas/             # Additional schemas
│   └── index.js             # Main server file
├── strategy/                 # Trading strategy components
└── docs/                     # Project documentation
```

## 🛠️ Technologies Used

### Frontend
- **React.js 19.0.0** - Main frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI** - React component library
- **Chart.js** - Data visualization
- **Firebase** - Authentication and real-time features

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Development server with auto-restart
- **Create React App** - React development environment
- **Git** - Version control

## 🎯 Key Features

### Landing Page (Frontend)
- **Responsive Design** - Mobile-first approach
- **User Authentication** - Sign up, login, and account management
- **Product Showcase** - Trading features and benefits
- **Pricing Plans** - Subscription options
- **Support Section** - Help and documentation

### Trading Dashboard
- **Real-time Market Data** - Live stock prices and charts
- **Portfolio Management** - Holdings and positions tracking
- **Order Management** - Buy/sell orders with real-time updates
- **Watchlist** - Custom stock watchlists
- **Funds Management** - Account balance and transactions
- **Trading Strategy** - Custom trading strategies
- **Analytics Dashboard** - Performance metrics and charts

### Backend API
- **RESTful API** - Complete CRUD operations
- **User Authentication** - Secure login/signup system
- **Database Management** - MongoDB integration
- **Real-time Updates** - WebSocket support for live data
- **Order Processing** - Buy/sell order management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prathamesh0903/ZerodhaClone.git
   cd ZerodhaClone
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

4. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Setup

1. **Backend Environment Variables**
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=3002
   MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerodha
   JWT_SECRET=your_jwt_secret_key
   ```

2. **Frontend Environment Variables**
   Create a `.env` file in the `frontend/` directory:
   ```env
   REACT_APP_API_URL=http://localhost:3002
   REACT_APP_FIREBASE_CONFIG=your_firebase_config
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:3002`

2. **Start Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   Application will run on `http://localhost:3000`

3. **Start Dashboard Application**
   ```bash
   cd dashboard
   npm start
   ```
   Dashboard will run on `http://localhost:3001`

## 📊 Database Schema

### Holdings Model
- Product type (CNC/MIS)
- Stock name and quantity
- Average price and current price
- Net profit/loss percentage
- Daily change percentage

### Positions Model
- Active trading positions
- Real-time P&L tracking
- Position sizing and risk management

### Order Model
- Order details (buy/sell)
- Quantity and price
- Order status and timestamp
- User authentication

## 🔧 API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User authentication
- `GET /logout` - User logout

### Trading Data
- `GET /allHoldings` - Fetch user holdings
- `GET /allPositions` - Fetch active positions
- `GET /allOrders` - Fetch order history

### Order Management
- `POST /newOrder` - Place new order
- `PUT /updateOrder/:id` - Update order status
- `DELETE /cancelOrder/:id` - Cancel order

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme** - User preference support
- **Real-time Updates** - Live data without page refresh
- **Interactive Charts** - Advanced data visualization
- **Intuitive Navigation** - Easy-to-use interface
- **Loading States** - Smooth user experience

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt encryption
- **CORS Protection** - Cross-origin request handling
- **Input Validation** - Server-side data validation
- **Environment Variables** - Secure configuration management

## 📈 Performance Optimization

- **Code Splitting** - Lazy loading for better performance
- **Image Optimization** - Compressed assets
- **Caching Strategies** - Browser and server-side caching
- **Database Indexing** - Optimized queries
- **Bundle Optimization** - Minified production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Prathamesh** - [GitHub Profile](https://github.com/Prathamesh0903)

## 🙏 Acknowledgments

- Zerodha for inspiration
- React.js community
- MongoDB Atlas for database hosting
- Firebase for authentication services

## 📞 Support

For support and questions, please contact:
- Email: [Your Email]
- GitHub Issues: [Create an issue](https://github.com/Prathamesh0903/ZerodhaClone/issues)

---

**Note**: This is a clone project for educational purposes. It does not provide real trading functionality and should not be used for actual financial transactions.
