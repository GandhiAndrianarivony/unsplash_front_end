import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

function ViewProfilePage() {
    return (
        <div className="pb-10">
            <Header />
            <div>Profile Page</div>
            <div className="flex justify-center gap-5 ">
                <div className="bg-black p-1">
                    <Link to="likes/" className="text-white text-center">
                        like
                    </Link>
                </div>
                <div className="bg-black p-1">
                    <Link to="stats/" className="text-white text-center">
                        stats
                    </Link>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <Outlet />
            </div>
        </div>
    );
}

export default ViewProfilePage;
