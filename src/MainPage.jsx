import Navbar from "./Navbar";
import Table from "./Table";
import Footer from "./Footer";

function MainPage() {
    return (
        <>
            <div className="container-fluid">
                <main className="flex-grow-1 d-flex justify-content-center align-items-start py-4 px-3 w-100">
                    <Table/>
                </main>
            </div>

        </>
    );
}

export default MainPage;
