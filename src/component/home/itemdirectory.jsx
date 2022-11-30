import { Card } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import {SiBitcoincash} from 'react-icons/si'
import {TbSend} from 'react-icons/tb'
import './itemdirectory.css'
import { useEffect, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { useProjectStore } from '../../store/projectStore';
import { ProductContext } from '../../context/product.context';


const ItemDirectory = ({ items }) => {
    // const { id , title , wait2erp , reward , extra} = items;
    // const {name } = extra
    const { bp,
        done,
        dw,
        inprocess,
        is_staff,
        jname_th,
        jobid,
        jobname,
        jobname_en,
        jobno,
        piles,
        supervisor,
        watcher } = items;
    
    // const project = useProjectStore((state) => state.project)
    // const setProject = useProjectStore((state) => state.setProject)


    const { products , status } = useContext(ProductContext);

    


    // useEffect(() => {
    //     setProject(items)
    //     if(status === 200) {
    //         console.log('ok pass')
    //     } else {console.log('fetch error')}
    // }, [items]);


    return (
        <>
            
            <div className="container my-10 mx-auto" >
                <Card style={{ width: '60rem' }} className='ml-5'>
                    <Card.Header className="text-xl bold"><NavLink to='/test'
                    //  state={{from: items}}
                    //   key={id}
                      >{jobname}</NavLink></Card.Header>
                    <Card.Body className='p-1'>
                        {/* <Card.Title className="mt-2">
                         <Link>{title}</Link>
                         
                         <hr/>
                        </Card.Title> */}
                        {/* <Card.Title onClick={() => {console.log(project)}}>Cilck to check store</Card.Title> */}
                        <div className='d-flex d-flex-col mt-4'>
                        <Card.Text className="mx-2 flex"><TbSend className='mx-2 ' color="red" size={20}/>รอส่ง: <NavLink href="#"> {inprocess} ต้น</NavLink></Card.Text>
                        <Card.Text className="mx-2 flex "><SiBitcoincash className='mx-2 ' color="orange" size={20}/> สำเร็จ: <Card.Link onClick={() => {}}> {done} ต้น</Card.Link></Card.Text>
                        {/* { extra ? 
                            <Dropdown className='mt-0 ml-auto '>
                                <Dropdown.Toggle varaint="success">Area</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">{extra.name}</Dropdown.Item>
                                    <Dropdown.Item href="#">Tako</Dropdown.Item>
                                    <Dropdown.Item href="#">Cornsalad</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> : null
                        } */}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default ItemDirectory;