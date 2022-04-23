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

// {
//   "button_text_color": "#ffffff",
//   "text_color": "#ffffff",
//   "hint_color": "#98989e",
//   "link_color": "#007aff",
//   "bg_color": "#1c1c1d",
//   "button_color": "#007aff"
// }
          onClick={(event) => {
            event.preventDefault()
            const webApp = window.Telegram.WebApp
            webApp.onEvent('themeChanged', () => {

            })
            webApp.MainButton.setText('My text')
            webApp.MainButton.show()
            const { initData, colorScheme, themeParams } = webApp
            // webApp.colorScheme // light | dark
            const orderData = { order: [{ title: 'apple', count: 2 }] }
            const params = { initData, data: orderData }
            webApp.MainButton.onClick(() => {

              webApp.sendData(JSON.stringify(params))
              // webApp.close()
            })
            // webApp.expand()
            // const apiService = new ApiService(BOT_URL, {})
            // apiService.execute('api/demo', 'POST', { data: params })
          }}
        >
          Click HERE!
        </div>
      </header>
    </div>
  );
}

export default App;
