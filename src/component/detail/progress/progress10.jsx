
import { Card, Table } from "react-bootstrap";

const Progress10 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
            <h2>10. เทคอนกรีต</h2>
            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={4}>ข้อมูลการเทคอนกรีต</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ชุดโฟร์แมน</th>
                        <td>ชุดที่ 6 เทพ-สุเทพ</td>
                    </tr>
                    <tr>
                        <th>โฟร์แมนควบคุมงาน</th>
                        <td>สันติ ชำนาญ</td>
                    </tr>
                    <tr>
                        <th>ท้องฟ้าโปร่ง</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>มีเมฆมาก</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>ฝนตก</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>ลมแรง</th>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>

            <Table bordered>
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green" >หกหก</td>
                    </tr>
                </tbody>
            </Table>


            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th>คันที่<br/>เลขรถ</th>
                        <th>คอนกรีตจากปากเคสซิ่ง(ม.)</th>
                        <th>ความลึกคอนกรีตจากปากเคสซิ่ง (ม.) </th>
                        <th>ขนาดหน้าตัดที่คำนวณ(ม.)</th>
                        <th>ความยาวท่อเทรมี่ที่จมหลังเท(ม.)</th>
                        <th>จำนวนที่ตัด(ท่อน)</th>
                        <th>
                            <tr >ความยาวต่อท่อเทรมี่</tr>
                            <tr>
                                <td>ที่ตัด</td>
                                <td>ที่เหลือ</td>
                                <td>ที่จมหลังตัด</td>
                            </tr>
                        </th>
                        <th>
                            <tr >เวลาเทคอนกรีต</tr>
                            <tr>
                                <td>เริ่ม-สิ้นสุด</td>
                                <td>คันสุดท้าย</td>
                            </tr>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1<br/>883</td>
                        <td>6.00</td>
                        <td>0.10</td>
                        <td>0.64</td>
                        <td>11.90</td>
                        <td>2</td>
                        <td>12</td>
                        <td>0.00</td>
                        
                    </tr>
                </tbody>
            </Table>


            <Table striped bordered responsive="sm">
                <tbody>
                    <tr>
                        <th>Ø เฉลี่ย (ม.)</th>
                        <td>0.64</td>
                        <th>คอนกรีตขึ้นทะเบียน (ม3)</th>
                        <td>6.00 - โออาร์ซี</td>
                    </tr>
                    <tr>
                        <th>Ø ฟันข้าง (ม.)</th>
                        <td>-</td>
                        <th>คอนกรีต New Quota (ม3)</th>
                        <td>6.13</td>
                    </tr>
                    <tr>
                        <th>น้ำหนักเหล็ก (กก.)</th>
                        <td>	597.17</td>
                        <th>ความสูงหัวเข็มก่อนถอนเคสซิ่ง (ม.)</th>
                        <td>1.40</td>
                    </tr>
                </tbody>
            </Table>


            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={2}>ข้อมูลคอนกรีตที่เหลือจากการเท</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ปริมาณคอนกรีตที่เหลือ (ม3)</th>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <th>นำคอนกรีตที่เหลือไปใช้</th>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>


            <div>Graph</div>


            <h4>ช่องข้อมูลในตารางเทคอนกรีตจะเป็นสีแดงถ้าพบว่า</h4>
            <li>{"ตัดท่อเทรมี่มากกว่า 2 ท่อน"}</li>
            <li>ท่อเทรมี่จมในคอนกรีตเกิน 12 ม.</li>
            <li>ความยาวท่อเทรมี่จมหลังตัดน้อยกว่า 3 ม.</li>
            <li>ขนาดหน้าตัดที่คำนวณ น้อยกว่า 95% ของขนาดเสาเข็ม</li>
            <li>ขนาดหน้าตัดเฉลี่ยน้อยกว่า 97% ของขนาดเสาเข็ม</li>
            <li>{"ปริมาณคอนกรีตขึ้นทะเบียน > ปริมาณคอนกรีต New Quota"}</li>

            </div>
        </>
    )
};

export default Progress10;
