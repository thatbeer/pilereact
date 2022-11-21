import { Card } from "react-bootstrap";


const DetailPage = () => {
    return (
        <>
            <h1>Detail page</h1>
            <div className="container mx-auto my-2 col-6 bg-orange-300">
                <Card>
                    <Card.Title>Genral info</Card.Title>
                </Card>
            </div>
            <div className="container mx-auto my-2 col-10 bg-amber-300">
                Process01
            </div>
        </>
    );
};

export default DetailPage;