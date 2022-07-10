import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { ParamContext } from './ContextReducer'

const ProtectedRoute = ({component: Component, auth, ...rest}) => {
    const context = useContext(ParamContext)
    return (
        <Route
            {...rest}
            render={(props) => {
                console.debug("ProtectedRoute auth: ", auth)
                console.debug("ProtectedRoute context: ", context)
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