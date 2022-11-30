import axios from "axios";
import { createContext , useState , useEffect } from "react";

export const ProductContext = createContext({
    product : [],
    status: '',
})

export const ProductsProvider = ({ children }) => {
    const [products , setProducts] = useState([]);
    const [status, setStatus] = useState('');


    const getProduct = async() => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setStatus(response.status);
    }


    useEffect(() => {
        getProduct();
    },[])

    const value = { products , status };
    return (
        <ProductContext.Provider value={value}>
            { children }
        </ProductContext.Provider>
    );
};