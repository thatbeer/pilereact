import { Table } from "react-bootstrap";



const Progress2 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10  ">
                <h2>2. ปักเคสซิ่ง</h2>
                <Table striped bordered responsive="sm" className="container mx-auto my-2 col-10">
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลการปักเคสซิ่ง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>วันที่เริ่ม</th>
                            <td>20 ส.ค. 2565 (09:10)</td>
                        </tr>
                        <tr>
                            <th>วันที่เสร็จ</th>
                            <td>20 ส.ค. 2565 (09:10)</td>
                        </tr>
                        <tr>
                            <th>เคสซิ่ง ∅ (ม.)</th>
                            <td>0.60</td>
                        </tr>
                        <tr>
                            <th>ความยาว (ม.)</th>
                            <td>15.000</td>
                        </tr>
                        <tr>
                            <th>เครื่องจักร/เครน No.</th>
                            <td>CR-21</td>
                        </tr>
                        <tr>
                            <th>ไวโบรแฮมเมอร์ No.</th>
                            <td>VH-19</td>
                        </tr>
                        <tr>
                            <th>ผู้ขับ</th>
                            <td>วีระชัย แสนโคตร</td>
                        </tr>
                        <tr>
                            <th>เช็คลูกดิ่ง</th>
                            <td>ผ่าน</td>
                        </tr>
                        <tr>
                            <th>เช็คระดับน้ำ</th>
                            <td>ผ่าน</td>
                        </tr>
                    </tbody>
                </Table>


                <Table bordered className="my-4">
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green" >หกหก</td>
                    </tr>
                </tbody>
                </Table>

                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ</h4>
                <li>ไม่ได้เช็คลูกดิ่งและ/หรือเช็คระดับน้ำในขณะที่ทำการปักเคสซิ่ง</li>
            <hr/>
            </div>
        </>
    )
};

export default Progress2;