import { useNavigate } from 'react-router-dom';
import './navigation.css'
import { useEffect } from 'react';

const Navigation = () => {

    const navigate = useNavigate();

    const SignOutHandler = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        navigate('/');
    };

    const checkifuserIn = () => {
        return  localStorage.getItem("accessToken");
    }
    
    useEffect(() => {
        const response = checkifuserIn();
        if (response) {
          navigate('/main')
        } else {
            navigate('/')  
        }
    }, []);
    


      
    

    return (
        <div className='tagis'>
            <header class="py-3 mb-3 border-bottom">
                <div class="container-fluid d-grid gap-3 align-items-center" >
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <p>HHH</p>
                    </a>
                    <ul class="dropdown-menu text-small shadow">
                    <li><a class="dropdown-item active" href="#" aria-current="page">Overview</a></li>
                    <li><a class="dropdown-item" href="#">Inventory</a></li>
                    <li><a class="dropdown-item" href="#">Customers</a></li>
                    <li><a class="dropdown-item" href="#">Products</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Reports</a></li>
                    <li><a class="dropdown-item" href="#">Analytics</a></li>
                    </ul>
                </div>

                <div class="d-flex align-items-center">
                    <form class="w-100 me-3" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div class="flex-shrink-0 dropdown">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                    </a>
                    <ul class="dropdown-menu text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><p onClick={SignOutHandler}>Logout</p></li>
                    </ul>
                    </div>
                </div>
                </div>
            </header>
        </div>
    )
};

export default Navigation;

