import ItemDirectory from "../component/home/itemdirectory";
import shallow from 'zustand/shallow'
import axios from "axios";
import { useState , useContext} from "react";
import { ProductContext  } from "../context/product.context";

import { ProjectContext } from "../context/pile.context";

import { Button } from "react-bootstrap";

const Homepage = () => {
    const fakeitem01 = [
        {
            id:1,
            title:'project101 : sirinthorn kwang10',
            wait2erp:0,
            reward:10,
            extra: {
                idx:1,
                name:'A'
                },
        },
        {
            id:2,
            title:'project101 : Ximxan leelasudjad',
            wait2erp:6,
            reward:1,
            extra: 0,
        },
        {
            id:3,
            title:'project101 : Bangprakan srithammarat',
            wait2erp:4,
            reward:2,
            extra: 0,
        },
        {
            id:4,
            title:'project101 : sirinthorn kwang10',
            wait2erp:0,
            reward:10,
            extra: 0,
        },
        {
            id:5,
            title:'project101 : sirinthorn kwang10',
            wait2erp:0,
            reward:10,
            extra: 0,
        },
        {
            id:6,
            title:'project101 : sirinthorn kwang10',
            wait2erp:0,
            reward:10,
            extra: {
                idx:1,
                name:'A'
                },
        },
    ]

    const [item , setItem ] = useState([]);

    // const FetchProject = async () => {
    //     const response = await axios.get(http);
    //     setItem(response.data)
    // }
    const { products , status } = useContext(ProductContext);
    const { project , p_status} = useContext(ProjectContext);
    const { data } =project
    return (
        <>
            
            {data?.map((item,index) => (
                <ItemDirectory key={index} items={item} />
            ))}
        </>
    )
};

export default Homepage;