import { FaHeart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { MdCollections } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import artImage from '../assets/images/art.jpg';
import profilImage from'../assets/images/profile.png';

const UserProfileLayout = () => {
    return (
        <div>
            <div className="px-44">
                <div className="relative h-96 rounded-b">
                    <img className="h-96 w-full object-cover rounded-b" src={artImage} alt="cover"/>
                    <div className="absolute start-12 -bottom-20">
                        <img className="object-cover border-4 border-white w-40 h-40 rounded-full" src={profilImage} alt="" />
                    </div>
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
