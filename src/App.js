/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import Header from './Header'
import Menu from './components/MenuComponent'
import { DISHES } from './shared/Dishes'

function App () {
  return (
    <div className="App">
      <Header />
      <Menu dishes={DISHES}/>
    </div>
  )
}

export default App
