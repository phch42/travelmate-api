import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Cities from "./pages/Cities";
import Places from "./pages/Places";
import CityDetails from "./pages/CityDetails";
import About from "./pages/About";

function Router() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/cities" element={<Cities />} />
                <Route path="/places" element={<Places />} />
                <Route path="/city/:id" element={<CityDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
    )
}

export default Router;