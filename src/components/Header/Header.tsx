import s from './Header.module.css'
import logo from '../../assets/images/incubator.png'
import {NavLink} from 'react-router-dom'
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {InitStateType, setUserDataAC} from "../../redux/auth-reducer";
import {login} from "../../api/api";

const Header = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppStoreType,InitStateType>(state => state.auth)

    useEffect(()=>{
        login().then(response =>{
                    dispatch(setUserDataAC(response.data.data))
            })},[])
debugger
    return (
        <header className={s.header}>
            <div><img src={logo}/></div>


            <div>
                {state.isAuth? state.id:<NavLink to={'/login'} className={s.loginBlock}>Login</NavLink>}
                </div>
        </header>

    );
}

export default Header;