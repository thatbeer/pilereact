import { useEffect,useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
const types = [
    {
        name: "men's clothing",
        value:'1'
    },
    {
        name: "jewelery",
        value:'2'
    },
    {
        name: "electronics",
        value:'3'
    },
    {
        name: "women's clothing",
        value:'4'
    }
]
// const types = [
//     {
//         name: "ทำค้าง",
//         value:'1'
//     },
//     {
//         name: "เสร็จแล้ว",
//         value:'2'
//     },
//     {
//         name: "รอส่งERP",
//         value:'3'
//     },
//     {
//         name: "เขียว-แดง",
//         value:'4'
//     }
// ]


const FilterButton = () => {
    const [itemStore,setItemStore] = useState([]);
    const fetchProject = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response.data);
        setItemStore(response.data)
    };

    useEffect( () => {
        fetchProject();
    },[]);

    //\\ ************************ Filter by Type ************************ //\\
    // \\//\\////\\/\//\/\/\/\/\/\/\/\//\///\/\//\/\/\/\/\//\/\/\/\/\\/\///\/\\
    ////\\/\//\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\///\/\/\/\/\/\/\/\/\/\\\/\/\\\/\\\
    // create value store typefilter which default value is "ทำค้าง"
    const [typeFilter , setTypeFilter] = useState("women's clothing");
    // create store value which will recieve list of item after filtered by type
    const [itembyType , setItembyType] = useState(itemStore);

    const TypeTunnel = (Type) => {
        const filterlist = itemStore.filter(item => item.category === Type);
        return filterlist
    };

    const onClickTypeButton = (event) => {
        const {value} = event.target.dataset;
        setTypeFilter(value);
        console.log(value+' event');
    }

    useEffect(() => {
        setItembyType(TypeTunnel(typeFilter))
        
    },[typeFilter])

    return (
        <>
            <div className="d-flex justify-content-between  sm:flex-wrap
                text-center content-center align-items-center col-9 mx-auto mt-6 " >
                    {types.map( (type) => (
                        <button
                        key = {type.value}
                        className="btn mb-2 mb-m-0 p-0 btn-block btn-outline-primary"
                        style={{ width: '10rem' , height: '5rem' }}
                        name={type.name}
                        type="button" 
                        value={type.name}
                        onClick={() => {setTypeFilter(type.name);}}
                    >
                        <div className="row align-items-center h-100 m-auto">
                            <span className="col-8 align-items-center">{type.name}</span>
                            <div className="col d-flex flex-end bg-cyan-900 align-items-center h-100">{type.value}</div>
                        </div>
                    </button>
                    ))}    
                    <Button type='submit' onClick={() => {console.log(itemStore)}} >check itemStore</Button>
                    <Button type='submit' onClick={() => {console.log(itembyType)}} >check item filter by category</Button>
                    <Button type='submit' onClick={() => {console.log(typeFilter)}} >check type</Button>
            </div>
        </>
    )
};

export default FilterButton;