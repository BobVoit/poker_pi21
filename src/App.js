import './style/App.scss';
import Header from './components/Header';
import Authorization from './components/Autorization';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="authorization">
          <Authorization />
        </div>
      </div>
    </div>
  );
}

export default App;
