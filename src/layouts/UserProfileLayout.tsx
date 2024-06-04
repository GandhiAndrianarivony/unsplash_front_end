import { Link, Outlet } from "react-router-dom";

const UserProfileLayout = () => {
    return (
        <>
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
                <div className="bg-black p-1">
                    <Link to="collections/" className="text-white text-center">
                        collections
                    </Link>
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <Outlet />
            </div>
        </>
    );
};

export default UserProfileLayout;
