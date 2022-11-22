
import { Card, Table } from "react-bootstrap";



const Progress9 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
            <h2>9. ทดสอบคอนกรีต</h2>

            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={2}>ข้อมูลทดสอบคอนกรีต</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ยี่ห้อคอนกรีต</th>
                        <td>โออาร์ซี</td>
                    </tr>
                    <tr>
                        <th>Strength</th>
                        <td>280 CY</td>
                    </tr>
                    <tr>
                        <th>MIX No.</th>
                        <td>PYB3225C5</td>
                    </tr>
                    <tr>
                        <th>ค่า Slump (ซม.)</th>
                        <td>17.5 - 20.0</td>
                    </tr>
                    <tr>
                        <th>ปริมาณคอนกรีตสะสม (ม3)</th>
                        <td>6.00</td>
                    </tr>
                    <tr>
                        <th>Note จะขึ้นแถบสีแดง
                        เมื่อมีการป้อนข้อมูลในหมายเหตุ</th>
                        <td>เขียว</td>
                    </tr>
                </tbody>
            </Table>



            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th>คันที่เลขรถ</th>
                        <th>คอนกรีตต่อคัน (ม3)</th>
                        <th>Slump17.5 - 20.0 (ซม.)</th>
                        <th>รถออกจาก plant	</th>
                        <th>รถถึง site	</th>
                        <th>อนุมัติ Slump</th>
                        <th>ปฏิเสธ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 883</td>
                        <td>6.00</td>
                        <td>red</td>
                        <td>20 ส.ค. 65(12:41)</td>
                        <td>1 883</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>ปริมาณคอนกรีตสะสม (ม3)(A)</td>
                        <td>6.000</td>
                        <td colSpan={2}>ไม่เกินโควต้า</td>
                        <td colSpan={2}>-</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>New Quota (ม3)(B)</td>
                        <td>6.130</td>
                        <td colSpan={4}>B ≥ A</td>
                    </tr>
                </tbody>
            </Table>


            <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h4>
            <li>{"เวลาที่รถคอนกรีตถึงไซต์ – เวลาที่รถคอนกรีตออกจาก plant > 3.5 ชั่วโมง"}</li>
            <li>รถคอนกรีตคันที่ 1 ไม่มีการตรวจสอบค่า Slump</li>
            <li>ไม่ได้ตรวจสอบค่า Slump ให้กับรถคอนกรีตทุกๆ 3 คัน</li>
            <li>ค่า Slump ไม่ได้อยู่ในช่วงที่กำหนด</li>
            <li>{"ปริมาณคอนกรีตสะสม > ปริมาณคอนกรีต New Quota"}</li>
            <hr/>
            </div>
        </>
    )
};

export default Progress9;