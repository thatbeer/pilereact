import { Alert} from "react-bootstrap"
import {GrDocumentPdf} from 'react-icons/gr'
import { Outlet } from "react-router-dom";


const NavTitle = () => {
    return (
        <>
            <Alert sticky='top' variant="info" className="underline mb-0" >This is a alert tap for usig as topic title , Nice</Alert>
            <Alert variant="info" className="underline d-flex" >
                <h4 className='mx-2 '>File.pdf</h4>
                <GrDocumentPdf size={40} className="d-flex mt-0 ml-2 "/>

            </Alert>
            <Outlet/>
        </>
    )
};

export default NavTitle;