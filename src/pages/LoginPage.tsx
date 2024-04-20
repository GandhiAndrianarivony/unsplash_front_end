import Header from "../components/Header";
import SideMenu from "../components/menu/SideMenu";
import Login from "../features/authentication/components/Login";

function LoginPage() {
    return (
        <div>
            <Header />
            <div className="pt-20">
                <Login />
            </div>
            {/* <SideMenu display="" isResponsive={false}/>
            <SideMenu display="block" isResponsive={true}/> */}
            <SideMenu/>
        </div>
    );
}

export default LoginPage;
