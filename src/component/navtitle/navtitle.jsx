
import {GrDocumentPdf} from 'react-icons/gr'
import { Outlet } from "react-router-dom";
import { Navbar,Container } from "react-bootstrap";



const NavTitle = () => {
    return (
        <div className="top-10 mt-4">
            {/* <Alert sticky='top' variant="info" className="underline mb-0 position-sticky" >This is a alert tap for usig as topic title , Nice</Alert>
            <Alert variant="info" className="underline d-flex" >
                <h4 className='mx-2 '>File.pdf</h4>
                <GrDocumentPdf size={40} className="d-flex mt-0 ml-2 "/>
            </Alert> */}
            <Navbar bg="light" 
            sticky='top'
            >
                <Container>
                <Navbar.Brand><h4>Project Title</h4></Navbar.Brand>
                <Navbar.Brand className="underline d-flex" >
                    <h4 className='mx-2 mt-1'>File.pdf</h4>
                    <GrDocumentPdf size={40} className="d-flex mb-1 ml-2 "/>

                </Navbar.Brand>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
};

export default NavTitle;