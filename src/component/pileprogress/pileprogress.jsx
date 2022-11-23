import { Table,Card, Nav, Button } from "react-bootstrap"


const PileProgress = () => {

    const headerlist = ['เลขที่เข็ม','1','2','3','4','5','6','7','8','9','10','11','วันที่(ประวัติล่าสุด)'];
    const headerNav = false;
    return (
        <>
            <div className="container mx-auto my-3 col-10">
                <Card size="sm" className="overflow-auto">
                    { headerNav ? 
                        <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Active</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        
                        :
                        <Card.Header>Project's Title , status {"im fine"} , thanku , how are you today</Card.Header>
                    
                    }
                    <Card.Body>
                        <Table size="sm" className="text-center" responsive='sm'>
                            <thead>
                                <tr>
                                    {headerlist.map((list,index) => (
                                        <th key={index}>{list}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 20 }).map((_,index) => (
                                    <tr key={index}>
                                    {Array.from({ length: 13 }).map((_,index) => (
                                            <td key={index} >item:{index +1}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

export default PileProgress;