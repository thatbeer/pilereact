import { Alert, Button, Card, InputGroup } from "react-bootstrap"
import {GrDocumentPdf} from 'react-icons/gr'
import { FormControl } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Cardbox from "../component/card/card";
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

            <div className="container mt-6 bg-emerald-200 py-2">
                <div className="search-bar col-6 mx-auto my-2" >
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
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                    <Card.Body><button><h2>title</h2></button></Card.Body>
                    </Card>
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                        <Card.Body><button><h2>title</h2></button></Card.Body>
                    </Card>
                    <Card style={{ width: '10rem' , height: '5rem' }} >
                    <Card.Body><button><h2>title</h2></button></Card.Body>
                    </Card>
                    <Card style={{ width: '10rem' , height: '5rem' }}>
                    <Card.Body><button><h2>title</h2></button></Card.Body>
                    </Card>
                </div>
            </div>
            <div className="container mt-10 bg-slate-300">
                <h1>Body</h1>
                <Cardbox/>

            </div>
        </>
    )
};

export default Subpage;