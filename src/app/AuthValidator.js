import { useSelector } from "react-redux"
import Login from "../components/Login"
import AuthUser from "../components/AuthUser"

const AuthValidator = () => {
    const user = useSelector(e => e.auth.user)
    if (!user) {
        return <Login />
    }
    return <AuthUser />;
};

export default AuthValidator;
