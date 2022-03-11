import React from 'react';
import s from './Spinner.module.css'

export const Spinner = () => {
    return (
        <div className={s.circle}>
        <div className={s.spinner_box}>
            <div className={s.circle_border}>
                <div className={s.circle_core}></div>
            </div>
        </div>
        </div>
    );
};
