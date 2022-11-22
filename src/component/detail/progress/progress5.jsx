import { Card, Table } from "react-bootstrap";



const Progress5 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-12 text-sm ">
                <h2>5. เจาะเสาเข็ม</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr className="info">
                            <th colSpan={2}>ข้อมูลการเจาะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="col-4">เช็คลูกดิ่ง</th>
                            <td >ผ่าน</td>
                        </tr>
                        <tr>
                            <th>เช็คระดับน้ำ</th>
                            <td>ผ่าน</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลเสาเข็ม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1.ระดับบนท่อปลอกเหล็ก (ม.)</th>
                            <td >0.5000</td>
                        </tr>
                        <tr>
                            <th>2.ระดับพื้นดิน (ม.)</th>
                            <td>-0.1300</td>
                        </tr>
                        <tr>
                            <th>3.ระดับตัดหัวเสาเข็ม (ม.)</th>
                            <td>-1.0000</td>
                        </tr>
                        <tr>
                            <th>4.ความยาวเคสซิ่ง (ม.)</th>
                            <td>15.0000(จากขั้นตอนที่ 2 ปักเคสซิ่ง)</td>
                        </tr>
                        <tr>
                            <th>5.ระดับปลายเสาเข็ม (ม.)</th>
                            <td>-18.0000</td>
                        </tr>
                        <tr>
                            <th>6.ความลึกที่ต้องการวัดจากปากเคสซิ่ง (ม.)</th>
                            <td>18.5000(ระดับบนท่อปลอกเหล็ก - ระดับปลายเสาเข็ม)</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลการเตรียมเหล็กหิ้วโครง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ระยะเผื่อโครงเหล็กจม (ม.)</th>
                            <td>0.500</td>
                        </tr>
                        <tr>
                            <th>ความสูงจุดหิ้วโครงเหล็กเหนือระดับตัดหัวเข็ม (ม.)</th>
                            <td>0.500</td>
                        </tr>
                        <tr>
                            <th>เหล็กหิ้วโครงยาวไม่เกิน (ม.)</th>
                            <td>0.500</td>
                        </tr>
                        <tr>
                            <th>เหล็กหิ้วโครงที่วัดได้ (ม.)</th>
                            <td>
                                <td>1.000</td>
                                <td>click to show picture</td>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h4>
                <li>ไม่ได้เช็คดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</li>
                <li>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"} </li>
                <li>{"ระดับพื้นดิน < ระดับตัดหัวเสาเข็ม"}</li>
                <br/>
            <Table bordered>
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green col-8" >หกหก</td>
                    </tr>
                </tbody>
            </Table>
            </div>



            <div className="container mx-auto my-2 col-10 ">
                <Table>
                    <thead>
                        <tr>
                            <th>ลำดับการเจาะ</th>
                            <th>ความลึกวัดจากระดับปากเคสซิ่ง(ม.)</th>
                            <th>เครื่องจักร/เครน No.</th>
                            <th>เครื่องเจาะ</th>
                            <th>วัน/เวลา (เริ่ม-หยุดเจาะเสาเข็ม)</th>
                            <th>คนขับ</th>
                            <th>หลุมพัง</th>
                            <th>ขนาดฟันข้างของบัคเก็ต(ม.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.สว่าน</td>
                            <td>18.600</td>
                            <td>PR-17</td>
                            <td>ไม่บอก</td>
                            <td>20 ส.ค. 2565 (09:32 - 10:08)</td>
                            <td>วาลิด ไตรรินทร์</td>
                            <td>ไม่</td>
                            <td>ไม่บอก</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            if cause
            <div className="container mx-auto my-2 col-10 ">
                <Card className="text-center">
                    <Card.Header>รูปภาพการวัดขนาดฟันข้างบักเก็ต</Card.Header>
                    <Card.Body>
                        <Card.Text>ไม่พบรูปภาพ</Card.Text>
                        <Card.Text>เสาเข็มนี้ไม่มีการเจาะบักเก็ต</Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="logo.svg/100px180" />
                </Card>
            </div>
            <div className="container mx-auto my-2 col-10 ">
                <Card className="text-center">
                    <Card.Header>รูปภาพการวัดขนาดฟันข้างบักเก็ต</Card.Header>
                    
                    <Card.Img variant="bottom" src="logo.svg/100px180" />
                </Card>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ</h4>
                <li>{"ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย < ความลึกที่ต้องการวัดจากปากเคสซิ่ง"}</li>
            <hr/>
            </div>

        </>
    )
};

export default Progress5;