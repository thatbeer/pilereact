import { Table } from "react-bootstrap";

const Progress03 = () => {
    return (

        <>
            <div className="container mx-auto my-2 col-10 
            bg-slate-300  border border-b">
                <h2>3. วัดตำแหน่งก่อนเจาะ</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr className="info">
                            <th colSpan={2}>ข้อมูลการวัดตำแหน่ง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>วันที่เริ่ม</th>
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

            
            <div className="container mx-auto my-2 col-10 ">
            <div>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</div>
                <li>ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง</li>
                <li>ไม่ได้ใส่รูปภาพโครงเหล็ก หรือใส่รูปภาพโครงเหล็กไม่ครบทุกโครง</li>
                <div className="row border border-black bg-slate-300">
                    <div className="col border border-black">
                        <div className="col-12"><p>Note จะขึ้นแถบสีแดง</p><p>เมื่อมีการป้อนข้อมูลในหมายเหตุ</p></div>
                    </div>
                    <div className="col-8 bg-green-600">sdsd</div>
                </div>
            </div>

            <div className="container mx-auto my-2 col-10 border border-black">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>ค่าพิกัดหมุด</th>
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
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อ</h4>
                <li>ค่าตำแหน่งเคสซิ่งเยื้องเกิน ± 0.03 ม.</li>
                <li>ไม่ได้ใส่รูปภาพหน้ากล้องเซอร์เวย์ที่แสดงค่าพิกัดเข็มที่อ่านได้และระยะคลาดเคลื่อนของค่าพิกัดเข็ม</li>
            </div>
        </>
    )
};

export default Progress03;