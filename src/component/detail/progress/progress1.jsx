import { Table } from "react-bootstrap";

const Progress1 = () => {
    return (
        <>
            <div className="container mx-auto my-2 col-10 ">
                <h2>1.เตรียมโครงเหล็ก</h2>
                <Table striped bordered responsive="sm">
                    <thead>
                        <tr>
                            <th colSpan={2}>ข้อมูลการเตรียมโครงเหล็ก</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>วันที่เริ่ม</th>
                            <td>20 ส.ค. 2565 (09:11)</td>
                        </tr>
                        <tr>
                            <th>วันที่เสร็จ</th>
                            <td>20 ส.ค. 2565 (09:14)</td>
                        </tr>
                        <tr>
                            <th>ชื่อผู้รับเหมาผูกเหล็ก</th>
                            <td>ช่างแอร์</td>
                        </tr>
                        <tr>
                            <th>Sheet No.</th>
                            <td>2</td>
                        </tr>
                    </tbody>
                </Table>

                <Table striped bordered responsive="sm">
                    <thead>
                        <tr>
                            <th>โครง</th>
                            <th>ตามแบบ</th>
                            <th>ลูกปูน</th>
                            <th>
                                <div>Main</div>
                                <div>Spiral</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>correct</th>
                            <th>carrot</th>
                            <th>
                                <div>Main</div>
                                <div>Spiral</div>
                            </th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th>correct</th>
                            <th>carrot</th>
                            <th>
                                <div>Main</div>
                                <div>Spiral</div>
                            </th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th>correct</th>
                            <th>carrot</th>
                            <th>
                                <div>Main</div>
                                <div>Spiral</div>
                            </th>
                        </tr>
                    </tbody>
                </Table>

                <h2>ข้อมูลจะขึ้นแถบสีแดงเมื่อ:</h2>
                <li>ไม่ได้ทำการติ๊กตรวจสอบโครงเหล็กหรือตรวจสอบโครงเหล็กไม่ครบทุกโครง</li>
                <li>ไม่ได้ใส่รูปภาพโครงเหล็ก / ลูกปูน หรือใส่รูปภาพโครงเหล็ก / ลูกปูนไม่ครบทุกโครง</li>

                <Table bordered className="my-2">
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green" >หกหก</td>
                    </tr>
                </tbody>
                </Table>

            </div>
            



        </>
    )
};

export default Progress1;