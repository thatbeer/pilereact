import { Card } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import './itemdirectory.css'


import { Link } from 'react-router-dom';

const ItemDirectory = ({ items }) => {
    const { id , title , wait2erp , reward , extra} = items;
    const {name } = extra
    

    return (
        <>
            
            <div className="container mt-10 mx-auto" >
                <Card style={{ width: '60rem' }} className='ml-5'>
                    <Card.Body>
                        <Card.Title className="mt-2">
                         <Link>{title}</Link>
                         <hr/>
                        </Card.Title>
                        
                        <div className='d-flex d-flex-col mt-4'>
                        <Card.Text className="mx-2">รอส่ง: <Card.Link href="#"> 0 ต้น</Card.Link></Card.Text>
                        <Card.Text className="mx-2">สำเร็จ: <Card.Link href="#"> 0 ต้น</Card.Link></Card.Text>
                        { extra ? 
                            <Dropdown className='mt-0 ml-auto '>
                                <Dropdown.Toggle varaint="success">Area</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">{extra.name}</Dropdown.Item>
                                    <Dropdown.Item href="#">Tako</Dropdown.Item>
                                    <Dropdown.Item href="#">Cornsalad</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> : null
                        }
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default ItemDirectory;