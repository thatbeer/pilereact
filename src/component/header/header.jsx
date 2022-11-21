import { Navbar,Nav, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {Button} from "react-bootstrap";
import './header.css'
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="flase" sticky='top' className='Nav-container'>
                <div className="d-flex d-flex-col">
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home" className="mx-3">React-Bootstrap-logo</Navbar.Brand>
                    </LinkContainer>

                    <LinkContainer to='/main'>
                    <Nav.Link href="#home" className="mx-3 my-2">Main</Nav.Link>
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
                        <LinkContainer to='/report'>
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>   
            </Navbar>
            
            <Outlet/>
        </>
    )
};

export default Header;