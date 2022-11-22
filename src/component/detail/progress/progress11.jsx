

import {  Table } from "react-bootstrap";

const Progress11 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
            <h2>11. ถอนเคสซิ่ง</h2>
            <Table striped="columns" bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={4}>ข้อมูลการถอนเคสซิ่ง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>วันที่เริ่ม</th>
                        <td colSpan={4} className="col-7">sdadsadsadsadsaddddddddddsdsdsdsdsdsd</td>
                    </tr>
                    <tr>
                        <th>วันที่เสร็จ</th>
                        <td>1</td>
                    </tr>
                    <tr>
                        <th>เครื่องจักร/เครน No.</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>ไวโบรแฮมเมอร์ No.</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>ผู้ขับ</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>ความลึกคอนกรีต วัดจากผิวดิน (ม.)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>ความสูงหัวเข็มหลังถอนเคสซิ่ง (ม.)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>ระยะเยิ้มตัวของคอนกรีต (ม.)</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>เช็คลูกดิ่ง</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>เช็คระดับน้ำ</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Note จะขึ้นแถบสีแดงเมื่อมีการป้อนข้อมูลในหมายเหตุ</th>
                        <td></td>
                    </tr>
                </tbody>
            </Table>

            <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อความสูงเผื่อหัวเข็มไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้</h4>
            <li>{"1.00 ม. ≤ ความสูงหัวเข็มหลังถอนเคสซิ่ง ≤ 1.20 ม."}</li>
            <hr/>
            </div>
        </>
    )
};

export default Progress11;
