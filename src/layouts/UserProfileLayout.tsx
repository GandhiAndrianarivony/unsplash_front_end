import { FaHeart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { MdCollections } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const UserProfileLayout = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img src="/profile.png" alt="" />

                <div className="">
                    <div className="flex">
                        <p className="text-3xl font-bold m-3">
                            Nom de l'utilisateur
                        </p>
                        <button className="border-2 rounded justify-self-end p-2 my-3">
                            Edit profile
                        </button>
                    </div>
                    <p className="m-3">
                        Download free, beautiful high-quality photos curated by
                        Andrianarivony.
                    </p>
                </div>
            </div>
            <div className="flex gap-5 mt-5 ms-5">
                <div className="p-1">
                    <Link to="" className="text-gray-500 flex items-center gap-2 hover:text-black focus:text-black focus:border-b-2 focus:border-black focus:pb-4">
                        <FaHeart />
                        like
                    </Link>
                </div>
                <div className="p-1">
                    <Link to="stats/" className="text-gray-500 flex items-center gap-2 hover:text-black focus:text-black focus:border-b-2 focus:border-black focus:pb-4">
                        <IoMdStats />
                        stats
                    </Link>
                </div>
                <div className="p-1">
                    <Link to="collections/" className="text-gray-500 flex items-center gap-2 hover:text-black focus:text-black focus:border-b-2 focus:border-black focus:pb-4">
                        <MdCollections />
                        collections
                    </Link>
                </div>
            </div>
            <hr />

            <div className="flex justify-center mt-5">
                <Outlet />
            </div>
        </div>
    );
};

export default UserProfileLayout;
