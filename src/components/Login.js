import { useDispatch } from "react-redux"
import { login } from "../libs/redux/authReducer"

import Button from '@mui/material/Button';

const Login = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(login({
            id: 1,
            name: "JHON",
        }))
    }

    return <div>Iniciar sesion
        <Button onClick={handleClick} variant="contained">Iniciar sesion</Button>
    </div>;
};

export default Login;
