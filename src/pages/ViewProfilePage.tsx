import Header from "../components/Header";
import UserProfileLayout from "../layouts/UserProfileLayout";

function ViewProfilePage() {
    return (
        <div className="pb-10">
            <Header />
            <div>Profile Page</div>
            <UserProfileLayout/>
        </div>
    );
}

export default ViewProfilePage;
