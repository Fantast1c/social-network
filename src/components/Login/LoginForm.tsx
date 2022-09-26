import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import style from "./Login.module.css"

type Inputs = {
    email: string
    password: string
    remember: boolean
};

const LoginForm = () => {

    let dispatch = useDispatch()

    const emailPattern = {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email'
    }
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: "onBlur" || "onSubmit"});
    const onSubmit: SubmitHandler<Inputs> = data => dispatch(loginTC(data.email, data.password, data.remember));

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.label}>
                <input className={style.input}
                placeholder={"Login"}
                       {...register("email",
                           {required: "Поле обязательно к заполнению", pattern: emailPattern})}/>
            </div>
            <div>
                {errors.email && errors.email.message}
            </div>
            <div>
                <input className={style.input}
                 type="password" placeholder={"Password"}
                       {...register("password",
                           {required: "Поле обязательно к заполнению"})}/>
            </div>
            <div>{errors.password && errors.password.message}</div>
            <div>
                <input type={"checkbox"} {...register("remember")} /> remember me
            </div>
            <div>
                <input className={style.button} type="submit"/>
            </div>
        </form>
    );
};

export default LoginForm
