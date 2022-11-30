import { Route,Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import LoginForm from './component/login/loginForm';
import Header from './component/header/header';
import Page404 from './page/error404';
import Homepage from './page/home';
import Subpage from './page/subpage';
import Cardbox from './component/card/card';
import DetailPage from './component/detail/detailpage';
import ProcessPage from './page/processpage';
import PrivateRoute from './utils/component/Authented';
import ServicePage from './page/service';
import PileProgress from './component/pileprogress/pileprogress';
import LgInTempalte from './template/logintemplate/logintempalte';


function App() {
  const navigate = useNavigate();


  const checkifuserIn = () => {
    return  localStorage.getItem("accessToken");
  }

  useEffect(() => {
    const response = checkifuserIn();
    if (response) {
      navigate('/main')
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Header/>} >
        <Route index element={<LoginForm/>} />
        <Route path='main/*' element={<Homepage/>} />
        <Route path=':test/*' element={<ProcessPage/>} /> 
        {/* <Route path='sub' element={<Subpage/>} /> */}
        {/* <Route path='detail' element={<DetailPage/>} /> */}
        <Route path="pre" element={<PrivateRoute/>} />
        {/* <Route path='card' element={<Cardbox/>} /> */}
        {/* <Route path="service" element={<ServicePage/>} />
        <Route path="about" element={<PileProgress/>} /> */}
      </Route>
      <Route path="testtemp" element={<LgInTempalte/>}/>
      <Route path='/*' element={<Page404/>} />
    </Routes>
  )
};

export default App
