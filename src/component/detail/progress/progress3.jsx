import { Table } from "react-bootstrap";

const Progress03 = () => {
    return (

        <>
            <div className="container mx-auto my-2 col-10 
            ">
                <h2>3. วัดตำแหน่งก่อนเจาะ</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr className="info">
                            <th colSpan={2}>ข้อมูลการวัดตำแหน่ง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="col-4">วันที่เริ่ม</th>
                            <td>20/08/2022 09:08</td>
                        </tr>
                        <tr>
                            <th>วันที่เสร็จ</th>
                            <td>20/08/2022 09:09</td>
                        </tr>
                        <tr>
                            <th>ช่างสำรวจ</th>
                            <td>โอ๋-พิเชษฐ จิตร์วิชา</td>
                        </tr>
                        <tr>
                            <th>ตำแหน่งตั้งกล้อง</th>
                            <td>TP1 (4973.697,1930.864)</td>
                        </tr>
                        <tr>
                            <th>ตำแหน่งธงหลัก</th>
                            <td>CP03 (5010.375,2004.055)</td>
                        </tr>
                        <tr>
                            <th>Resection</th>
                            <td>No</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className="info">
                            <th colSpan="2">ข้อมูลการวัดตำแหน่ง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>วันที่เริ่ม</th>
                            <td>20/08/2022 09:08</td>
                        </tr>
                        <tr>
                            <th>ระดับท่อปลอกเหล็ก (ม.)</th>
                            <td>0.5000</td>
                        </tr>
                        <tr>
                            <th>ระดับพื้นดิน (ม.)</th>
                            <td>0.5000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            
            

            <div className="container mx-auto my-2 col-10 border border-black">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th >ค่าพิกัดหมุด</th>
                            <th>ค่าพิกัดตามแบบ</th>
                            <th>ค่าพิกัดที่อ่านได้</th>
                            <th>คลาดเคลื่อน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Northing (ม.)</th>
                            <td>4500</td>
                            <td>4500</td>
                            <td>0.0230</td>
                        </tr>
                        <tr>
                            <th>Easting (ม.)</th>
                            <td>1900</td>
                            <td>1900</td>
                            <td>0.0230</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h4>
                <li>{"ระดับบนท่อปลอกเหล็ก < ระดับพื้นดิน"}</li>
                <Table bordered className="my-2">
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

export default Progress03;