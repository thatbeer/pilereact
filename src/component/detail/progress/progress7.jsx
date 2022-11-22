import { Card, Table } from "react-bootstrap";


const Progress7 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
                <h2>7. ลงโครงเหล็ก</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลการลงโครงเหล็ก</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>วันที่เริ่ม</th>
                            <td>20 ส.ค. 2565 (11:39)</td>
                        </tr>
                        <tr>
                            <th>วันที่เสร็จ</th>
                            <td>20 ส.ค. 2565 (10:19)</td>
                        </tr>
                        <tr>
                            <th>เครื่องจักร/เครน No.</th>
                            <td>	CR-21</td>
                        </tr>
                        <tr>
                            <th>ผู้ขับ</th>
                            <td>ระชัย แสนโคตร</td>
                        </tr>
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
                            <th>Sheet No.</th>
                            <td>2</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <h4>ไม่ได้เช็คดิ่งและ/หรือเช็คระดับน้ำก่อนเจาะเสาเข็ม</h4>
                <li>{"ระยะเผื่อโครงเหล็กจม < 0.30 ม."} </li>
            </div>

            <div className="container mx-auto my-2 col-10 ">
            <div className="row border border-black bg-slate-300">
                <div className="col border border-black">
                    <div className="col-12"><p>Note จะขึ้นแถบสีแดง</p><p>เมื่อมีการป้อนข้อมูลในหมายเหตุ</p></div>
                </div>
                <div className="col-8 bg-green-600"></div>
                </div>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr>
                            <th>โครง</th>
                            <th>ลงโครงเหล็ก</th>
                            <th>
                                <tr>MainBar</tr>
                                <tr>Spiral</tr>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>ผ่าน</td>
                            <th>
                                <tr>MainBar</tr>
                                <tr>Spiral</tr>
                            </th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ผ่าน</td>
                            <th>
                                <tr>MainBar</tr>
                                <tr>Spiral</tr>
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ผ่าน</td>
                            <th>
                                <tr>MainBar</tr>
                                <tr>Spiral</tr>
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
};

export default Progress7;
