import {Redirect} from "react-router-dom";
import React from "react";


export let WithAuthRedirect = (Component:any) =>{
    function RedirectComponent(props: any) {
        if (!props.isAuth) {return <Redirect to='/login'/>}
        return <Component {...props}/>
    }

    return RedirectComponent
}
