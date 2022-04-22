import logo from './logo.svg';
import './App.css';
import { ApiService } from './services/ApiService';
import { BOT_URL } from './config/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div href=''
          // OnTouchStart={(event) => {
          //   event.preventDefault()
          //   const apiService = new ApiService(BOT_URL, {})
          //   const data = 'COOLIO, ITS WORKS!!'
          //   apiService.execute('api/demo', 'POST', { data })
          // }}
          onClick={(event) => {
            event.preventDefault()
            const apiService = new ApiService(BOT_URL, {})
            const data = 'COOLIO, ITS WORKS!!'
            apiService.execute('api/demo', 'POST', { data })
          }}
        >
          Click HERE!
        </div>
      </header>
    </div>
  );
}

export default App;
