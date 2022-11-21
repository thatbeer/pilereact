import { Card } from 'react-bootstrap';
import './mainpage.style.css'
import { Dropdown } from 'react-bootstrap';

const MainPage = () => {
    return (
        <>

            <div className="container mt-10" >
                <Card style={{ width: '18re,' }}>
                    <Card.Body>
                        <Card.Title>This is header</Card.Title>
                        
                        <Card.Text>
                            Self is  text , Self is another text
                        </Card.Text>
                        <div className='d-flex d-flex-col'>

                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                        <div className='d-flex justify-content-end w-80'></div>
                            <Dropdown className='mt-2 mx-auto '>
                                <Dropdown.Toggle varaint="success">Open</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Pizza</Dropdown.Item>
                                    <Dropdown.Item href="#">Tako</Dropdown.Item>
                                    <Dropdown.Item href="#">Cornsalad</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default MainPage;