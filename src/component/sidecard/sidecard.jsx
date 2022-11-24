import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const SideCard = ({ name, ...props }) => {
    const [show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s)

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                Title
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
};

export default SideCard;