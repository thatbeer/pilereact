import { Dropdown } from "react-bootstrap";
import { Nav,Navbar , Container , NavDropdown } from "react-bootstrap";
export const DropdownBox = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-autoclose-true'>
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Action1</Dropdown.Item>
                <Dropdown.Item>Action1</Dropdown.Item>
                <Dropdown.Item>Action1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>LogOut</Dropdown.Item>            
            </Dropdown.Menu>
        </Dropdown>
    )
};

export const NavbarDarkExample = () => {
  return (
    <Navbar  bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



