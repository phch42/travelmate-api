import { Routes, Route } from "react-router-dom";

function Router() {
    return (
            <Routes>
                <Route path="/" element={<div>Home</div>} />
            </Routes>
    )
}

export default Router;