import { Table } from "react-bootstrap";


const Progress4 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-12 ">
                <h2>4. ทดสอบของเหลว</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <th colSpan={2}>ข้อมูลการทดสอบของเหลว</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ประเภทสารละลาย</th>
                            <td>โพลิเมอร์</td>
                        </tr>    
                    </tbody>     
                </Table>


                <Table bordered className="my-2">
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green col-8" >หกหก</td>
                    </tr>
                </tbody>
                </Table>

                <Table striped bordered responsive="sm" size="sm" className="text-center">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>pH</th>
                            <th>Density(ก./มล.)</th>
                            <th>Viscosity(วินาที)</th>
                            <th>%sand</th>
                            <th>วันและเวลา</th>
                            <th>ผู้ทดสอบ</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <div className="border-bottom">ที่วัดได้</div>
                                <div>มาตราฐาน</div>
                            </th>
                            <th>
                                <div className="border-bottom">ที่วัดได้</div>
                                <div>มาตราฐาน</div>
                            </th>
                            <th>
                                <div className="border-bottom">ที่วัดได้</div>
                                <div>มาตราฐาน</div>
                            </th>
                            <th>
                                <div className="border-bottom">ที่วัดได้</div>
                                <div>มาตราฐาน</div>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.สารละลาย<br/>ก่อนเจาะ</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>1.01<br/>[≤ 1.02]</td>
                            <td>65<br/>[≥ 55]</td>
                            <td>0.00<br/>[≤ 0.3]</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>15 ส.ค. 2565 (09:59)<br/>15 ส.ค. 2565 (10:08)</td>
                            <td>ฟัก-ณัฐพงษ์ วรเนตร</td>
                        </tr>
                        <tr>
                            <td>1.ก่อนเทปูน<br/>ปากหลุม</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>1.01<br/>[≤ 1.02]</td>
                            <td>65<br/>[≥ 55]</td>
                            <td>0.00<br/>[≤ 0.3]</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>15 ส.ค. 2565 (09:59)<br/>15 ส.ค. 2565 (10:08)</td>
                            <td>ฟัก-ณัฐพงษ์ วรเนตร</td>
                        </tr>
                        <tr>
                            <td>3.ระหว่างเทปูน<br/>กลางหลุม</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>1.01<br/>[≤ 1.02]</td>
                            <td>65<br/>[≥ 55]</td>
                            <td>0.00<br/>[≤ 0.3]</td>
                            <td>8.00<br/>[8.00-10.00]</td>
                            <td>15 ส.ค. 2565 (09:59)<br/>15 ส.ค. 2565 (10:08)</td>
                            <td>ฟัก-ณัฐพงษ์ วรเนตร</td>
                        </tr>
                    </tbody>
                
                </Table>            

            <hr/>
            </div>
            <div className="container mx-auto my-1 col-14 ">

            </div>
        </>
    )
};

export default Progress4;