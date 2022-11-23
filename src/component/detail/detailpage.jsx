import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import Progress0 from "./progress/progress0";
import Progress1 from "./progress/progress1";
import Progress2 from "./progress/progress2";
import Progress03 from "./progress/progress3";
import Progress5 from "./progress/progress5";
import Progress7 from "./progress/progress7";
import Progress8 from "./progress/progress8";
import Progress9 from "./progress/progress9";
import Progress11 from "./progress/progress11";
import Progress10 from "./progress/progress10";
import Progress4 from "./progress/progress4";
import Progress6 from "./progress/progress6";
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const DetailPage = () => {
    const { pileid } = useParams();

    const location = useLocation();
    const [locationState , setLocationState] = useState({});

    
    return (
        <>
            {/* <h1>{pileid}</h1> */}
            <button onClick={console.log(location.state.from.title)}>check location</button>
            <Progress0/>
            <Progress1/>
            <Progress2/>
            <Progress03/>
            <Progress4/>
            <Progress5/>
            <Progress6/>
            <Progress7/>
            <Progress8/>
            <Progress9/>
            <Progress10/>
            <Progress11/>
        </>
    );
};

export default DetailPage;