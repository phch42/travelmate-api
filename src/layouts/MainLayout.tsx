import Footer from "../components/Footer";
import Header from "../components/Header";
import Router from "../Router";

function MainLayout() {
    return (
        <>
            <Header />

            <main>
                <Router />
            </main>

            <Footer />
        </>
    )
}

export default MainLayout;