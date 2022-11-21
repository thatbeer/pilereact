import { Route, Routes } from "react-router-dom";
import NavTitle from "../component/navtitle/navtitle";
import Subpage from "./subpage";
import DetailPage from "../component/detail/detailpage";

const ProcessPage = () => {
    return (
        <Routes>
            <Route path="/" element={<NavTitle/>} >
                <Route index element={<Subpage/>} />
                <Route path=':pileid' element={<DetailPage/>} />
            </Route>
        </Routes>
    )
};

export default ProcessPage;