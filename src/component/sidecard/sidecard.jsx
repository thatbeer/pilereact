import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const SideCard = () => {
    const [show , setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s)

    return (
        <>
            <div variant="primary" onClick={toggleShow} className="me-2">
                Title
            </div>
            <Offcanvas show={show} onHide={handleClose} scrollable>
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