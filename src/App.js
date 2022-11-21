import { Route,Routes } from 'react-router-dom'


import LoginForm from './component/login/loginForm'
import Header from './component/header/header'
import Page404 from './page/error404'
import MainPage from './component/home/mainpage'




function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Header/>} >
        <Route index element={<LoginForm/>} />
        <Route path='main' element={<MainPage/>} />
        <Route path='*' element={<Page404/>} />
      </Route>
    </Routes>
  )
};

export default App
