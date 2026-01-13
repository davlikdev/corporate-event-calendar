import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <div>
            {isAuth ?
                <Routes>
                    {privateRoutes.map(route => (
                        <Route {...route} key={route.path}/>
                    ))}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route => (
                        <Route {...route} key={route.path}/>
                    ))}
                </Routes>
            }
        </div>
    );
};

export default AppRouter;