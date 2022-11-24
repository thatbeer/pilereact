import { Alert, Button, Card, InputGroup , Table} from "react-bootstrap"
import {GrDocumentPdf} from 'react-icons/gr'
import { FormControl } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Cardbox from "../component/card/card";
import PileProgress from "../component/pileprogress/pileprogress";
import FilterButton from "../component/filterbutton/filterbutton";
// this page suppose to recieve props from a previous history
// which may look like subpage = ({props}) for contructing the page
// based on props data


import { useEffect,useState } from "react";
import axios from "axios";



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

const headers = ['id','title','price','description','rate','count','category'];



const Subpage = () => {
    const location = useLocation();
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
    // create value store typefilter which default value is "ทำค้าง"
    const [typeFilter , setTypeFilter] = useState("men's clothing");
    // create store value which will recieve list of item after filtered by type
    const [itembyType , setItembyType] = useState(itemStore);
    
    const TypeTunnel = (Type) => {
        const filterlist = itemStore.filter(item => item.category === Type);
        return filterlist;
    };

    useEffect(() => {
        const newFilteredItembyType = itemStore.filter((data,idx) => {
            return data.category === typeFilter
        });

        setItembyType(newFilteredItembyType)
    },[itemStore,typeFilter])
   

    //\\//\\ ************************ Filter by Search ************************ //\\//\\
    const [searchFields , setSearchFields] = useState('');
    const [itembySearch, setItembySearch] = useState(itembyType);

    const onSearchChangeHandler = (event) => {
        const searchFieldTitle = event.target.value.toLocaleLowerCase();
        setSearchFields(searchFieldTitle);
    };

    const ResetSearchField = () => {
        setSearchFields('');
        console.log('Reset search field')
    };

    useEffect(() => {
        const newFilteredItem = itembyType.filter((data,index) => {
            return data.title.toLocaleLowerCase().includes(searchFields);
        });
        
        setItembySearch(newFilteredItem);
        

    },[searchFields,itembyType])


    return (
        <>
            <Outlet/>
            
            <div className="container mt-6 py-2">
                
                <div className="search-bar col-9 mx-auto my-2" >
                    <InputGroup>
                        <FormControl
                            type='search'
                            placeholder='search query'
                            aria-label="search"
                            value={searchFields}
                            onChange={onSearchChangeHandler}
                        />
                        <Button id="btton-addon" onClick={ResetSearchField} variant="outline-primary">clear</Button>
                        <Button id="btton-addon" onClick={console.log(location)} variant="outline-primary">clear</Button>
                    </InputGroup>
                </div>
                {/* <FilterButton/> */}
                
                {/* Filter BUTTON ZONE */}
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
                        onClick={() => {setTypeFilter(type.name);
                            setItembyType(TypeTunnel(type.name));}}
                    >
                        <div className="row align-items-center h-100 m-auto">
                            <span className="col-8 align-items-center">{type.name}</span>
                            <div className="col d-flex flex-end bg-cyan-900 align-items-center h-100">{type.value}</div>
                        </div>
                    </button>
                    ))}    
                    {/* <Button type='submit' onClick={() => {console.log(itemStore)}} >check itemStore</Button>
                    <Button type='submit' onClick={() => {console.log(typeFilter)}} >check type</Button>
                    <Button type='submit' onClick={() => {console.log(itembyType)}} >check item filter by category</Button>
                    <Button type='submit' onClick={() => {console.log(itembySearch)}} >check search item</Button> */}
                </div>
            </div>

            <div className="container mt-10 bg-slate-300">
                {/* <h1>Body</h1> */}
                {/* <Cardbox/> */}
            </div>
            {itembySearch && itembySearch.length > 0 ?
                <div className="container mx-auto my-2 col-10">
                    <Card size="sm" className="overflow-auto">
                        <Card.Header>Project's Title , status {"im fine"} , thanku , how are you today</Card.Header>
                        <Card.Body>
                            <Table size="sm" className="text-center" responsive="sm">
                                <thead>
                                    <tr>
                                        {headers.map((list,index) => (
                                            <th key={index}>{list}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {itembySearch.map((item,idx) => (
                                        
                                            <tr>
                                                <td>
                                                    <NavLink
                                                        key={item.id}
                                                        to={item.title}
                                                        state={{from: item}}
                                                    >
                                                        {item.id}
                                                    </NavLink>
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.description}</td>
                                                <td>{item.rating.rate}</td>
                                                <td>{item.rating.count}</td>
                                                <td>{item.category}</td>
                                            </tr>
                                    
                                    ))}
                                </tbody>
                                    
                            </Table>
                        </Card.Body>
                    </Card>
                </div> 
                : 
                null
            }
        </>
    )
};

export default Subpage;