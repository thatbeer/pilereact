import { Navbar,Nav, Form, Button, NavDropdown ,Dropdown ,DropdownButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import './header.css'
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useTokenStore } from '../../store/mecallApiStore';
import shallow from 'zustand/shallow'

import {FaUserCircle} from 'react-icons/fa'


import { NavbarDarkExample } from "../dropdown/dropdown";

let name = 'beer'

const Header = () => {
    

    const {A_token , setAToken,R_token , setRToken} = useTokenStore((state) => ({
        A_token:state.A_token,
        setAToken: state.setAToken,
        R_token:state.R_token,
        setRToken: state.setRToken
    }),shallow)

    const token = localStorage.getItem('accessToken');
    
    const navigate = useNavigate();

    const SignOutHandler = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        setAToken(null);
        navigate('/');
    };

    const checkifuserIn = () => {
        return  localStorage.getItem("accessToken");
    }
    
    useEffect(() => {
        const response = checkifuserIn();
        console.log(A_token)
        if (response) {
          navigate('/main')
        } else {
            navigate('/')  
        }
    }, []);


    return (
        <>
            <Navbar style={{'background-color': '#007cc2','text-color':'white'}} variant='dark' expand="false" sticky='top' className='Nav-container'>
                <div className="d-flex d-flex-col">
                    { A_token ? 
                    <LinkContainer to='/main'><Navbar.Brand className="mx-3">React-Bootstrap-logo</Navbar.Brand></LinkContainer> : 
                    <LinkContainer to='/'><Navbar.Brand className="mx-3">React-Bootstrap-logo</Navbar.Brand></LinkContainer>
                        
                    }
                
                    {/* <LinkContainer to='/main'>
                    <Nav.Link href="#" className="mx-3 my-2">Mainpage</Nav.Link>
                    </LinkContainer> */}

                    {/* <LinkContainer to='/card'>
                    <Nav.Link href="#" className="mx-3 my-2">Cardpage</Nav.Link>
                    </LinkContainer> */}
                    
                    {/* <LinkContainer to='/test'>
                    <Nav.Link href="#" className="mx-3 my-2">Process(testsubpage)</Nav.Link>
                    </LinkContainer> */}
                

                </div>

            

                {/* <Form className="search-container d-flex">
                    <Form.Control type='search' placeholder="Search" className="" aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FaUserCircle  size={30} />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto justify-start mx-10">
                        <LinkContainer to='/service'>
                            <Nav.Link>Service</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/report'>
                            <Nav.Link>Report</Nav.Link>
                        </LinkContainer>
                        <Nav.Item onClick={SignOutHandler} className="hover:opacity-60 hover:underline hover:cursor-pointer" >Logout</Nav.Item>
                    </Nav>
                </Navbar.Collapse>    */}

                <div className="mx-1">
                    {A_token ? <NavDropdown 
                        title={<span className="d-flex flex-col">
                                <FaUserCircle/>
                                { name }
                            </span>} 
                        className="mr-3" 
                        align="end"
                        style={{zIndex: '10'}}
                    >
                        <NavDropdown.Item>profile</NavDropdown.Item>
                        <NavDropdown.Item>report</NavDropdown.Item>
                        <NavDropdown.Item>help</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item
                            onClick={SignOutHandler} className="hover:opacity-60 hover:underline hover:cursor-pointer" 
                        >Logout</NavDropdown.Item>
                    </NavDropdown> : null
                    }

                </div>



            </Navbar>
            
            


            <Outlet/>
        </>
    )
};

export default Header;