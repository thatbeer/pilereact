
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
                        <th className="col-4">ชุดโฟร์แมน</th>
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
                        <td colSpan={2} className="green col-8" >หกหก</td>
                    </tr>
                </tbody>
            </Table>

            
            <Table striped bordered responsive="md" className="text-center justify-contents-center">
                <thead>
                    <tr >
                        <th>คันที่<br/>เลขรถ</th>
                        <th>คอนกรีต<br/>สะสม(ม3)</th>
                        <th>ความลึกคอนกรีตจากปากเคสซิ่ง (ม.) </th>
                        <th>ขนาดหน้าตัดที่คำนวณ(ม.)</th>
                        <th>ความยาวท่อเทรมี่ที่จมหลังเท(ม.)</th>
                        <th>จำนวนที่ตัด(ท่อน)</th>
                        <th colSpan={3}>ความยาวต่อท่อเทรมี่</th>
                        <th colSpan={2}>เวลาเทคอนกรีต</th>
                    </tr>
                    <tr >
                        <th ></th>
                        <th ></th>
                        <th ></th>
                        <th ></th>
                        <th ></th>
                        <th ></th>
                        <th className="col-1">ที่ตัด</th>
                        <th className="col-1">ที่เหลือ</th>
                        <th className="col-1">ที่จมหลังตัด</th>
                        <th className="col-2">เริ่ม-สิ้นสุด</th>
                        <th className="col-2">คันสุดท้าย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1<br/>883</td>
                        <td>6.00</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5.35</td>
                        <td>0</td>
                        <td>0.00</td>
                        <td>70.30</td>
                        <td>-</td>
                        <td>15 ส.ค. 2565 (17:49)<br/>15 ส.ค. 2565 (17:51)</td>
                        <td>-</td>
                        
                    </tr>
                </tbody>
            </Table>


            <Table striped="columns" bordered responsive="sm">
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


            <Table striped="columns" bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={2}>ข้อมูลคอนกรีตที่เหลือจากการเท</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="col-6">ปริมาณคอนกรีตที่เหลือ (ม3)</th>
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
