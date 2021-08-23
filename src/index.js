import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'

const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root'),
);
// ReactDOM.render(
//   <React.StrictMode>
//    <Router basename="/">
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
