import s from './Header.module.css'
import logo from '../../assets/images/incubator.png'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType, logoutTC, setIsAuth} from "../../redux/auth-reducer";

const Header = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppStoreType,InitStateType>(state => state.auth)

    return (
        <header className={s.header}>
            <div><img src={logo} alt="Logo"/></div>

            <button  className={s.button} onClick={ ()=>{ dispatch(setIsAuth())}}>isAuth=true (clickMe)</button>

            <div>
                {state.isAuth?
                    <div>{state.id} - <button onClick={()=> dispatch (logoutTC())}>Log out</button></div>
                    :
                    <NavLink to={'/Login'} className={s.loginBlock}>Login</NavLink>}
                </div>
        </header>

    );
}

export default Header;