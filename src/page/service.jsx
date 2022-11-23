import { useState , useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import SearchBox from '../component/search/searchbox';


const isActive = false

const ServicePage = () => {
    const {project} = useParams;

    // ************************FETCH DATA SECTION START************************
    // state store a real data
    const [state, setstate] = useState([]);
    // fetch a data then set them to state by setstate **note that axios dont need .json() 
    const fetchProject = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setstate(response.data)
    }
    // change this one to call fetch () to update the data list
    useEffect( () => {
        fetchProject();
        // console.log(state)
        // setFilterbyType(getProject());
    },[])
    // ************************FETCH DATA SECTION END************************

    // ===============================NEW SECRION======================================

    // ************************FILTER TYPE SECTION START************************
    // button type (null mean there has no type filtered yet)
    const [TypeFilter , setTypeFilter] = useState("men's clothing");
    // filteredState store an filtered data
    // const [filteredState, setFilteredState] = useState(state);

    // filteredStatebyType stores data which is filtered through type's funnel. 
    const [ filteredStatebyType , setFilteredStatebyType] = useState(state);
    
    const filterStateType = (Type) => {
        const filteredStateType = state.filter(item => item.category === Type);
        return filteredStateType;
    }

    const onClickEventFilter = (event) => {
        const typeEvent = event.target.value;
        setTypeFilter(typeEvent);
        alert(typeEvent + '  event!')
        // switch (typeEvent) {
        //     case FILTER_TYPE.MEN_CLOTH:
        //         return setFilteredStatebyType(filterStateByType(typeEvent));
        //     case FILTER_TYPE.WOMEN_CLOTH:
        //         return setFilteredStatebyType(filterStateByType(typeEvent));
        //     default:
        //         return setFilteredStatebyType(state);
        // }
        TypeFilter !== null ? 
            setFilteredStatebyType(filterStateType(typeEvent)) : 
                setFilteredStatebyType(state);
    };
    
    useEffect( () => {
        console.log("current type: " +TypeFilter)
    },[TypeFilter])

    useEffect( () => {
        const newFilteredStatebyButton = state.filter((data) => {
            return TypeFilter !== null ? data.category.toLocaleLowerCase().includes(TypeFilter): data
        });

        setFilteredStatebyType(newFilteredStatebyButton);
    },[state,TypeFilter]);

    // ************************FILTER TYPE SECTION END************************

    // ===============================NEW SECRION======================================

    // ************************SEARCH FORM SECTION START************************
    // filter by Serach and Seacher by typing a specific name
    const [searchfield ,setSearchField ] = useState('')

    //filtered data by search field
    const [filteredState , setFilteredState] = useState(filteredStatebyType);

    // search input change handle
    const onSearchChangeHandler = (event) => {
        const searchFieldTitle = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldTitle);
        console.log(searchfield);
    };
    // // reset search form field
    const ResetSearchField = () => {
        setSearchField('');
        setTypeFilter(null);
        console.log('Reset search field')
    };
    // filter data by search input
    useEffect( () => {
        const newFilteredState = filteredStatebyType.filter((data) => {
            return data.title.toLocaleLowerCase().includes(searchfield);
        });

        setFilteredState(newFilteredState);
        console.log('data which is passed through the Search funnel')
        console.log(newFilteredState)
    },[filteredStatebyType,searchfield]);
    // ************************SEARCH FORM SECTION END************************

    return ( // flex items-center justify-center min-h-screen bg-green-200 mt-8
        <div>
            <div className='container flex flex-col items-center 
            justify-center min-h-screen mx-auto gap-y-10'>


                <div className='searcher-header border border-black absolute top-40'>
                    <div className='flex flex-col p-2 flex-between gap-y-10'>

                        {/* Search box container */}
                        <div className='flex flex-col gap-y-4 justify-center items-center
                        border border-black'>
                            <div className='p-2 m-2 border border-black w-[500px]'>
                                {/* <input type='text' className='mx-6' ref={searchRef}
                                onChange={onSearchChangeHandler} placeholder="ค้นหาโครงการ"
                                /> */}
                                <SearchBox
                                    placeholder='    type here'
                                    onChangeHandler={onSearchChangeHandler}
                                    value={searchfield}
                                    className='mx-5 placeholder:italic w-1/2'/>
                                <button 
                                    className='bg-red border
                                    border-black mx-2'
                                    onClick={() => {console.log(TypeFilter)}} 
                                >checktype</button>
                                <button
                                    className='mx-2 border border-black' 
                                    value='null'
                                    onClick={ResetSearchField}
                                >Clear filter</button>
                                <button 
                                    className='bg-red border
                                    border-black mx-2'
                                    onClick={() => {console.log(filteredStatebyType)}} 
                                >StatebyButton</button>
                                <button 
                                    className='bg-red border
                                    border-black mx-2'
                                    onClick={() => {console.log(filteredState)}} 
                                >StatebySearch</button>
                            </div>
                        </div>


                        {/* Projects Filter button container */}
                        <div className="filter-container flex justify-between items-center contents-center 
                        gap-x-30 gap-y-30 h-[100px] w-[800px] border border-black">
                            <div className={`${isActive} h-[80px] w-[160px] m-2 border border-black 
                            flex flex-col items-center`}>
                                <p>xxxxxxxxxxxxxx</p>
                                <button 
                                    value="men's clothing"
                                    onClick={onClickEventFilter}
                                >men's clothing</button>
                                <p>xxxxxxxxxxxxxx</p>
                            </div>
                            <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center'>
                                <p>xxxxxxxxxxxxxx</p>
                                <button 
                                    value='jewelery'
                                    onClick={onClickEventFilter}
                                >jewelery</button>
                                <p>xxxxxxxxxxxxxx</p>
                            </div>
                            <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center'>
                                <p>xxxxxxxxxxxxxx</p>
                                <button 
                                    value='electronics'
                                    onClick={onClickEventFilter}
                                >electronics</button>
                                <p>xxxxxxxxxxxxxx</p>
                            </div>
                            <div className=' h-[80px] w-[160px] m-2 border border-black
                            flex flex-col items-center'>
                                <p>xxxxxxxxxxxxxx</p>
                                <button 
                                    value="women's clothing"
                                    onClick={onClickEventFilter}
                                    className={`${isActive}`}
                                >women's clothing</button>
                                <p>xxxxxxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-list  absolute h-[1000px] top-[400px]  w-[1000px] '>
                    <div className='flex flex-col p-2 m-2 h-[900px]
                    border border-black items-center contents-center'>
                        
                        
                        {/* <div className='h-[200px] w-[900px]  border border-black my-3'>
                            <p>This is test sentence which is used for layout demo</p>
                            <p className='underline'>body</p>
                            <p>Six years ago, The Tyrant conquer the world with his money.</p>
                        </div> */}


                        {/* found a boilerplate! */}
                        {/* <div className='h-[200px] w-[900px]  border border-black my-3'>
                            <p>This is test sentence which is used for layout demo</p>
                            <p className='underline'>body</p>
                            <p>Six years later, The Tyrant conquer the sun with his marine.</p>
                        </div> */}
                        
                        {/* this one should map every project data which is filtered or not to display on the screen */}
                        {/* another boilerplate -- gotta do it later*/}
                        {/* lets name it as EachItemDirectory */}
                        {/* use filteredState for search */}
                        {/* use filteredStatebyType for type*/}
                        {filteredState && filteredState.length > 0 ? filteredState.map((list) => (
                        <div 
                            className='flex flex-col min-h-[220px] w-[900px] my-3 mx-auto p-5 border border-black'>
                            <NavLink 
                                key={list.id}
                                
                                to={list.category}
                                
                                state={{from: list}}
                            >
                                <ul>
                                    <li><h1 className='font-bold underline-offset-1'>title{list.id} : {list.title}</h1></li>
                                    <li>${list.price}</li>
                                    <li>category: {list.category}</li>
                                    <li className='underline'>description</li>
                                    <li className='text-emerald-700'>{list.description}</li>
                                    <li>rating: {list.rating.rate} review: {list.rating.count}</li>
                                     
                                    {/* <li className='flex h-[2px] w-[200px]'>
                                        <img 
                                        className="hidden object-fit rounded-l-xl 
                                        h-[480px] opacity-70 3xl:h-72 transform 
                                        md:flex hover:rounded-xl hover:opacity-100 
                                        duration-1000" src={list.image} alt={`${list.title}`}/>
                                    </li> */}
                                </ul>
                            </NavLink>
                        </div> 
                        )) : <div className='flex flex-col min-h-[160px] w-[900px] 
                        my-3 mx-auto p-3 border border-black
                        justify-center contents-center items-center'>
                                <h1 className='border border-black'>No current data satisfy your condition yet</h1>
                            </div>}
                        {/* <ProjectDirectory projects={data} /> */}
                        

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServicePage;

