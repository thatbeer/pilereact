
import {GrDocumentPdf} from 'react-icons/gr'
import { Outlet } from "react-router-dom";
import { Navbar,Container } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
// import SideCard from '../sidecard/sidecard';

import { useProjectStore } from '../../store/projectStore';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProjectContext } from '../../context/pile.context';
import ItemDirectory from '../home/itemdirectory';
import { NavLink } from 'react-router-dom';



const NavTitle = () => {
    const [show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s)

    // const project = useProjectStore((state) => state.project)

    const { project , p_status} = useContext(ProjectContext);
    const {data} = project;

    return (
        <div className="relative top-10 mt-4">
            {/* <Alert sticky='top' variant="info" className="underline mb-0 position-sticky" >This is a alert tap for usig as topic title , Nice</Alert>
            <Alert variant="info" className="underline d-flex" >
                <h4 className='mx-2 '>File.pdf</h4>
                <GrDocumentPdf size={40} className="d-flex mt-0 ml-2 "/>
            </Alert> */}
            <Navbar bg="light" 
            // sticky='top'
            >
                <Container>
                <Navbar.Brand onClick={toggleShow} className="me-2 hover:cursor-pointer">
                    <h2>Project</h2>
                </Navbar.Brand>
                    <Offcanvas show={show} onHide={handleClose} >
                        <Offcanvas.Header closeButton className='mt-4 mx-2'>
                            <Offcanvas.Title ><Link to='/' style={{color: 'black'}}>Main page</Link></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* <Link to='/'>Main page</Link> */}
                            <ul className='container mx-auto my-1 border border-emerald-100'>
                                {data?.map((item,index) => (
                                    <li className='mt-2 '>
                                        <div className='hover:bg-slate-300 overflow-auto p-2'>
                                            <NavLink
                                            to='/test' 
                                            state={{from:item}}
                                            key={item.jobid}
                                            onClick={() => window.location.reload}
                                            style={{color: 'black'}}
                                        
                                            >
                                                {item.jobname}
                                            </NavLink>
                                        </div>
                                        <hr/>
                                    </li>
                                ))}
                            </ul>
                            {/* <option>sdd</option> */}
                            {/* <h2>{project.title}</h2>
                            <p>{project.reward}</p>
                            {project.map((item,index) =>(
                                <div key={index}>
                                    <p>{item.id}</p>
                                    <p>{item.reward}</p>
                                    <p>{item.wait2erp}</p>
                                    <p>{item.title}</p>
                                </div>
                            ) )} */}
                        </Offcanvas.Body>
                    </Offcanvas>
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