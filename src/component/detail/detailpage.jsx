import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

const DetailPage = () => {
    return (
        <>
            {/* Process00 */}
            <h1>Detail page</h1>
            <div className="container mx-auto my-2 col-6 bg-orange-300 rounded-top">
                <div className="row border border-secondary rounded-top">
                    <h2>Header</h2>
                </div>
                <div className="row">
                    <div className="col border border-secondary">
                        row2 col1
                        <p>sasas</p>
                    </div>
                    <div className="col border border-secondary">
                        row2 col2
                        <p>sasas</p>
                    </div>
                    <div className="col border border-secondary">
                        row2 col3
                        <p>sasas</p>
                    </div>
                </div>
            </div>

            {/* Process01 */}
            <div className="container mx-auto my-2 col-10 bg-amber-300 ">
                <div className="row">
                    <h2>ข้อมูลการเตรียมโครงเหล็ก</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">start date</div>
                        <div className="row">end date</div>
                        <div className="row">ชื่อผู้รับเหมา</div>
                        <div className="row">Sheet numbers</div>
                    </div>
                    <div className="col">
                        <div className="row">start date</div>
                        <div className="row">end date</div>
                        <div className="row">ชื่อผู้รับเหมา</div>
                        <div className="row">Sheet numbers</div>
                    </div>
                    
                </div>


            </div>

            {/* Process02 */}
            <div className="container mx-auto my-2 col-10 bg-amber-300">
                Process2
                <div className="row border border-secondary" >
                    <div className="col border border-secondary">No.</div>
                    <div className="col border border-secondary">ตามแบบ</div>
                    <div className="col border border-secondary">
                        <div className="row border border-secondary">MainBar</div>
                        <div className="row border border-secondary">SubBar</div>
                    </div>

                </div>
                
                <div className="row border border-secondary">
                    <div className="col border border-secondary">
                        <div className="row border border-secondary">1</div>
                        <div className="row border border-secondary">2</div>
                        <div className="row border border-secondary">3</div>
                        <div className="row border border-secondary">4</div>
                    </div>
                    <div className="col border border-secondary">
                        <div className="row border border-secondary">1</div>
                        <div className="row border border-secondary">2</div>
                        <div className="row border border-secondary">3</div>
                        <div className="row border border-secondary">4</div>
                    </div>
                    <div className="col border border-secondary">
                        <div className="row border border-secondary">1</div>
                        <div className="row border border-secondary">2</div>
                        <div className="row border border-secondary">3</div>
                        <div className="row border border-secondary">4</div>
                    </div>
                </div>


                
            </div>
        </>
    );
};

export default DetailPage;