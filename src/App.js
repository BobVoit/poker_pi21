import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import './style/App.scss';

import Header from './components/Header/Header';
import Login from './components/Autorization/Login';
import CheckIn from './components/Autorization/CheckIn';
import Profile from './components/Profile/Profile';
import Tables from './components/Tables/Tables';
import { initializeApp } from './redux/appReducer';
import About from './components/About/About';
import Preloader from './components/common/Preloader/Preloader';

const Game = React.lazy(() => import('./components/Game/Game'));
const TablePOker = React.lazy(() => import('./components/Game/TablePoker/TablePoker'));
 

class App extends React.Component  {
  componentDidMount() {
    this.props.initializeApp();
  }
  

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          {/* <div className="container"> */}
              <Header /> 
              <React.Suspense fallback={<Preloader />}>
                <Route path="/login" render={() => <Login />} />
                <Route path="/checkin" render={() => <CheckIn />} />
                <Route path="/game" render={() => <TablePOker />} />
              </React.Suspense>
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/tables" render={() => <Tables />} />
              <Route path="/about" render={() => <About />} />
          {/* </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
