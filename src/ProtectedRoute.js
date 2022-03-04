import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { ParamContext } from './ContextReducer'

const ProtectedRoute = ({component: Component, ...rest}) => {
    const context = useContext(ParamContext)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (context.isLogin) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='\login' />
                }
            }}
        />
    )
}

export default ProtectedRoute