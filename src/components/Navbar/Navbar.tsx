import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item}>Profile</a>
            </div>
            <div>
                <a className={s.item}>Messages</a>
            </div>
            <div>
                <a className={s.item}>News</a>
            </div>
            <div>
                <a className={s.item}>Music</a>
            </div>
            <div>
                <a className={s.item}>Settings</a>
            </div>

        </nav>

    );
}

export default Navbar;