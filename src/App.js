/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import Menu from './components/MenuComponent'
import { DISHES } from './shared/Dishes'
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
