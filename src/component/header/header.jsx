import { Navbar,Nav, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import './header.css'
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useTokenStore } from '../../store/mecallApiStore';
import shallow from 'zustand/shallow'

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
        localStorage.removeItem("accessToken");
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
            <Navbar bg="light" expand="flase" sticky='top' className='Nav-container'>
                <div className="d-flex d-flex-col">
                    { token ? 
                    <LinkContainer to='/main'><Navbar.Brand className="mx-3">React-Bootstrap-logo</Navbar.Brand></LinkContainer> : 
                    <LinkContainer to='/'><Navbar.Brand className="mx-3">React-Bootstrap-logo</Navbar.Brand></LinkContainer>
                        
                    }
                
                    {/* <LinkContainer to='/main'>
                    <Nav.Link href="#" className="mx-3 my-2">Mainpage</Nav.Link>
                    </LinkContainer> */}

                    {/* <LinkContainer to='/card'>
                    <Nav.Link href="#" className="mx-3 my-2">Cardpage</Nav.Link>
                    </LinkContainer> */}
                    
                    <LinkContainer to='/test'>
                    <Nav.Link href="#" className="mx-3 my-2">Process(testsubpage)</Nav.Link>
                    </LinkContainer>
                

                </div>
            

                {/* <Form className="search-container d-flex">
                    <Form.Control type='search' placeholder="Search" className="" aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                <Navbar.Toggle aria-controls=""/>
                
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
                </Navbar.Collapse>   
            </Navbar>
            
            <Outlet/>
        </>
    )
};

export default Header;