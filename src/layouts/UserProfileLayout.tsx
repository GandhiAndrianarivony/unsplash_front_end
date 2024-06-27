import { Link, Outlet } from "react-router-dom";

const UserProfileLayout = () => {
    return (
        <>
            <div className="flex justify-center gap-5 ">
                <div className="bg-black p-1">
                    <Link to="" className="text-white text-center">
                        Like
                    </Link>
                </div>
                <div className="bg-black p-1">
                    <Link to="stats/" className="text-white text-center">
                        Stats
                    </Link>
                </div>
                <div className="bg-black p-1">
                    <Link to="collections/" className="text-white text-center">
                        Collections
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
