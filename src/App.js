

import './App.css'

import LoginForm from './component/loginForm'
import SpinnerAnimate from './utils/component/spinner.utils'
import Navigation from './component/navigation'

function App() {
  

  return (
    <div className="App">
      <Navigation/>
      
      <div className='container' >
        <LoginForm/>

      </div>
    </div>
  )
};

export default App
