import { Table } from "react-bootstrap";

const Progress6 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
                <h2>6. ลงโครงเหล็ก</h2>
                <Table striped bordered responsive="sm" className="text-sm">
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลการเก็บตะกอน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="col-4">วันที่เริ่ม</th>
                            <td>2222</td>
                        </tr>
                        <tr>
                            <th>วันที่เสร็จ</th>
                            <td>2222</td>
                        </tr>
                        <tr>
                            <th>ขนาดบัคเก็ตเก็บตะกอน</th>
                            <td>222</td>
                        </tr>
                        <tr>
                            <th>เครื่องจักร/เครน No.</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>ระยะเวลารอเก็บตะกอน (นาที)</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>ความลึกจากปากเคสซิ่ง(หลังรอเก็บตะกอน) (ม.)</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>ความหนาของตะกอน (ม.)</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>ความลึกที่วัดจากปากเคสซิ่ง (ม.)</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>ความลึกวัดจากปากเคสซิ่ง (หลังเก็บตะกอน) (ม.)</th>
                            <td></td>
                        </tr>

                    </tbody>
                </Table>

                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h4>
                <li>ไม่ได้เปลี่ยนบัคเก็ตเจาะเป็นบัคเก็ตเก็บตะกอน</li>
                <li>{"ระยะเวลารอเก็บตะกอน < 30 นาที"}</li>
                <li>{"ความลึกวัดจากปากเคสซิ่งหลังเก็บตะกอน < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>


                <Table bordered>
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green col-8" >หกหก</td>
                    </tr>
                </tbody>
                </Table>
            <hr/>
            </div>
        </>
    )
};

export default Progress6;