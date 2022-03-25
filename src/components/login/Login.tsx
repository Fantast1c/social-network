import {SubmitHandler, useForm} from "react-hook-form";
import {InitStateType, loginTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type Inputs = {
    email: string
    password: string
    remember:boolean
};

const LoginForm = () => {

    let dispatch = useDispatch()

    const emailPattern = {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email'}

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({mode: "onBlur"|| "onSubmit"});
    const onSubmit: SubmitHandler<Inputs> = data =>   dispatch(loginTC(data.email, data.password, data.remember));



    return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <input placeholder={"Login"}
                           {...register("email",
                                        {required:"Поле обязательно к заполнению", pattern:emailPattern })}/>
                </div>
                <div>
                    {errors.email && errors.email.message}
                </div>
                <div>
                    <input type="password" placeholder={"Password"}
                           {...register("password",
                                         {required:"Поле обязательно к заполнению"})}/>
                </div>
                    <div>{errors.password && errors.password.message}</div>
                <div>
                    <input type={"checkbox"} {...register("remember")}/> remember me
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
    );
};


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
