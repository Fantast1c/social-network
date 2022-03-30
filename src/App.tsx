import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC, initType} from "./redux/app-reducer";
import {AppStoreType} from "./redux/store";
import {Spinner} from "./assets/spinner/Spinner";
import {InitStateType} from "./redux/auth-reducer";
const DialogsWithRouter = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ProfileWithRouter = React.lazy(() => import('./components/Profile/Profile'));

const App = () => {
    const dispatch = useDispatch()
    let state = useSelector<AppStoreType, initType>(state => state.app)
    let authState = useSelector<AppStoreType, InitStateType>(state => state.auth)


    useEffect(()=>{
       dispatch(initializeAppTC())
    },[])

    if(!state.initialized){
        return <Spinner/>
    }


    return (
            <div className="app">
                <Header/>
                <div className="app-wrapper-main">
                    <div className="app-main">
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <React.Suspense fallback={<Spinner/>}>
                            <Switch>
                                <Route exact path="/profile/:userId?" render={() => <ProfileWithRouter  />}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route exact path="/dialogs" render={() => <DialogsWithRouter isAuth={authState.isAuth}/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                            </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default App;
