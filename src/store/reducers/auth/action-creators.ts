import {AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models";
import {AppDispatch} from "../../store";
import axios from "axios";

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: isAuth}),
    setIsLoading: (isLoading: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true));
        try {
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const user = response.data.find(user => user.username === username && user.password === password)
                if (user) {
                    localStorage.setItem("isAuth", "true")
                    localStorage.setItem("username", user.username)
                    dispatch(AuthActionCreators.setUser(user))
                    dispatch(AuthActionCreators.setIsAuth(true))

                } else {
                    dispatch(AuthActionCreators.setError("Invalid username or password"))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)

        } catch (error) {
            AuthActionCreators.setError("Мы получили ошибку")
        }
    },
    logout: () => async (dispatch:AppDispatch) => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem("username")
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))

    }
}