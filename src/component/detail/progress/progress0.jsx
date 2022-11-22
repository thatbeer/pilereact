import { Table } from "react-bootstrap";


const Progress0 = () => {
    return(
        <>
            <h1>Detail page</h1>
            <div className="container mx-auto my-2 col-10 bg-orange-300 rounded-top">


                <Table striped bordered responsive="sm">
                    <thead>
                        <tr>
                            <th colSpan={3}>ประเภทเสาเข็ม: Working Pile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ขนาดเสาเข็ม(ม.)<br/>0.600</td>
                            <td>ระดับปลายเสาเข็ม(ม.)<br/>-18.00</td>
                            <td>ระดับตัดหัวเสาเข็ม(ม.)<br/>-1.000</td>
                        </tr>
                    </tbody>
                </Table>








                    {/* <div className="row border border-secondary rounded-top">
                        <h2>Header</h2>
                    </div>
                    <div className="row">
                        <div className="col border border-secondary">
                            row2 col1
                            <p>sasas</p>
                        </div>
                        <div className="col border border-secondary">
                            row2 col2
                            <p>sasas</p>
                        </div>
                        <div className="col border border-secondary">
                            row2 col3
                            <p>sasas</p>
                        </div>
                    </div> */}
            </div>
        </>
    )
    
};

export default Progress0;