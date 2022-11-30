import axios from "axios";
import { createContext , useState , useEffect } from "react";

export const ProjectContext = createContext({
    project : [],
})

export const ProjectsProvider = ({ children }) => {
    const [project , setProjects] = useState([]);
    const [p_status, setP_Status] = useState('');


    const getProjects = async() => {
        const response = await axios.get('http://147.50.12.230:84/api/pile/pljobs',{
            headers: {
                "access_token":  localStorage.getItem('access_token')
            }
        });
        setProjects(response.data);
        setP_Status(response.status);
    }


    useEffect(() => {
        getProjects();
    },[])

    const value = { project , p_status };
    return (
        <ProjectContext.Provider value={value}>
            { children }
        </ProjectContext.Provider>
    );
};