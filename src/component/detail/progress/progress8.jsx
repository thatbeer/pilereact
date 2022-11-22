import { Card, Table } from "react-bootstrap";




const Progress8 = () => {
    return (
        <>
            <div className="container mx-auto my-5 col-10 ">
            <h2>8. ลงท่อเทรมี่ / เม็ดโฟม</h2>
            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th colSpan={2}>ข้อมูลการลงท่อเทรมี่ / เม็ดโฟม</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="col-4">วันที่เริ่ม</th>
                        <td>20 ส.ค. 2565 (11:25)</td>
                    </tr>
                    <tr>
                        <th>วันที่เสร็จ</th>
                        <td>20 ส.ค. 2565 (11:31)</td>
                    </tr>
                    <tr>
                        <th>เครื่องจักร/เครน No.</th>
                        <td>CR-21</td>
                    </tr>
                    <tr>
                        <th>ผู้ขับ</th>
                        <td>วีระชัย แสนโคตร</td>
                    </tr>
                    <tr>
                        <th>ใส่เม็ดโฟมแล้ว</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>ความยาวท่อเทรมีรวม (ม.)</th>
                        <td>12</td>
                    </tr>
                </tbody>
            </Table>
            </div>

            <div className="container mx-auto my-2 col-10 ">
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อความยาวท่อเทรมี่รวมไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้:</h4>
                <li>{"[ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย - 1.5 ม.] < [ความยาวท่อเทรมีรวม] < [ความลึกวัดจากปากเคสซิ่งของการเจาะครั้งสุดท้าย]"} </li>
            </div>

            
            <div className="container mx-auto my-1 col-10 ">
            <Table bordered>
                <tbody>
                    <tr>
                        <th colSpan={1}>Note จะขึ้นแถบบสีแดงเมื่อ<br/>มีการป้อนข้อมูลในหมายเหตุ</th>
                        <td colSpan={2} className="green col-8" >หกหก</td>
                    </tr>
                </tbody>
            </Table>
        
            <Table striped bordered responsive="sm">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ขนาดท่อ(นิ้ว)</th>
                        <th>ความยาว(ม.)</th>
                        <th>ท่อสุดท้าย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2</th>
                        <th>8</th>
                        <th>6.00</th>
                        <th>ใช่</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>8</th>
                        <th>6.00</th>
                        <th>ใช่</th>
                    </tr>
                </tbody>
            </Table>
            </div>


            <div className="container mx-auto my-0 col-10 ">
                <h4>ข้อมูลจะขึ้นแถบสีแดงเมื่อขนาดท่อเทรมี่ไม่ได้อยู่ในเงื่อนไขดังต่อไปนี้</h4>
                <li>{"กรณีเสาเข็มมีขนาด 0.6 ม.< ∅ ≤ 1 ม. ควรใช้ขนาดท่อเทรมี่ ∅ = 10 นิ้ว"}</li>
                
            
            
            <hr/>
            </div>
        </>
    )
};

export default Progress8;