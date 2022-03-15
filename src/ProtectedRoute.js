import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { ParamContext } from './ContextReducer'

const ProtectedRoute = ({component: Component, auth, ...rest}) => {
    const context = useContext(ParamContext)
    return (
        <Route
            {...rest}
            render={(props) => {
                console.log("ProtectedRoute.js 1", auth, context.isLogin)
                console.log("ProtectedRoute.js 2", Component, props)
                if (auth || context.isLogin) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />
                }
            }}
        />
    )
}

export default ProtectedRoute