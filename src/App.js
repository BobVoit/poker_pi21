import './style/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Autorization/Login';
import CheckIn from './components/Autorization/CheckIn';

 

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <HeaderContainer />
          </div>
          <div className="authorization">
            {/* <Route path="/authorization" render={() => <Login />} /> */}
            <Route path="/checkin" render={() => <CheckIn />} />
          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
