import { Alert, Button, Card, InputGroup } from "react-bootstrap"
import {GrDocumentPdf} from 'react-icons/gr'
import { FormControl } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Cardbox from "../component/card/card";
import PileProgress from "../component/pileprogress/pileprogress";
// this page suppose to recieve props from a previous history
// which may look like subpage = ({props}) for contructing the page
// based on props data
const Subpage = () => {
    const fakepilelist = [
        {
            id:1,
            process: {
                process1:1,
                process2:1,
                process3:1,
                process4:1,
                process5:1,
                process6:1,
                process7:1,
                process8:1,
                process9:1,
                process10:1,
                process11:1,
            },
            date_last: "15/11/2022"
        },
    ]
    return (
        <>
            <Outlet/>
            {/* <Alert variant="info" className="underline mb-0" >This is a alert tap for usig as topic title , Nice</Alert>
            <Alert variant="info" className="underline d-flex" >
                <h4 classNmae='mx-2 '>File.pdf</h4>
                <GrDocumentPdf size={40} className="d-flex mt-0 ml-2 "/>

            </Alert> */}

            <div className="container mt-6 py-2">
                <div className="search-bar col-9 mx-auto my-2" >
                    <InputGroup>
                        <FormControl
                            type='search'
                            placeholder='search query'
                            aria-label="search"
                        />
                        <Button id="btton-addon" variant="outline-primary">Search</Button>
                    </InputGroup>
                </div>
                <div className="d-flex justify-content-between 
                text-center content-center align-items-center col-10 mx-auto mt-6 " >
                    
                    <Button style={{ width: '8rem' , height: '4rem ' }}>ทำค้าง</Button>
                    <button>
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                    <Card.Body><h2>เสร็จแล้ว</h2></Card.Body>
                    </Card></button>
                    <button>
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                    <Card.Body><h2>รอส่งERP</h2></Card.Body>
                    <Card.Img variant="bottom" src="../assets/loading.png/100px180" />
                    </Card></button>
                    <button>
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                    <Card.Body><h2>เขียว-แดง</h2></Card.Body>
                    <Card.Img variant="bottom" src="../assets/loading.png" />
                    </Card></button>
                </div>
            </div>
            <div className="container mt-10 bg-slate-300">
                <h1>Body</h1>
                {/* <Cardbox/> */}

            </div>
            <PileProgress/>
        </>
    )
};

export default Subpage;