import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    login: string
    password: string
    remember:boolean
};

const LoginForm = () => {

    const emailPattern = {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email'}

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({mode: "onBlur"|| "onSubmit"});
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <input placeholder={"Login"}
                           {...register("login",
                                        {required:"Поле обязательно к заполнению", pattern:emailPattern })}/>
                </div>
                <div>
                    {errors.login && errors.login.message}
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
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;
