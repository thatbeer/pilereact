import { Spinner } from "react-bootstrap";

const SpinnerAnimate = () => {
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h1>Loading...</h1>
        
        </>
    )
};

export default SpinnerAnimate;