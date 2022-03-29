import {useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
    const state = useSelector<AppStoreType,InitStateType>(state => state.auth)

    if(state.isAuth){
        return <Redirect to={"/profile/:userId?"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;