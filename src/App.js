import './style/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Autorization/Login';
import CheckIn from './components/Autorization/CheckIn';
import Profile from './components/Profile/Profile';

 

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
            <Header /> 
            <Route path="/login" render={() => <Login />} />
            <Route path="/checkin" render={() => <CheckIn />} />
            <Route path="/profile" render={() => <Profile />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
