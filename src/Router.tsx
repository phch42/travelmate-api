import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Cities from "./pages/Cities";
import Places from "./pages/Places";
import CityDetails from "./pages/CityDetails";

function Router() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/places" element={<Places />} />
                <Route path="/city/:id" element={<CityDetails />} />
            </Routes>
    )
}

export default Router;