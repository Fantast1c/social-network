import s from './Header.module.css'
import logo from '../../assets/images/incubator.png'
import {NavLink} from 'react-router-dom'
import {useEffect} from "react";
import axios from "axios";

const Header = () => {

    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response =>{
                
            })},[])

    return (
        <header className={s.header}>
            <div><img src={logo}/></div>
            <div ><NavLink to={'/login'} className={s.loginBlock}>Login</NavLink></div>
        </header>

    );
}

export default Header;