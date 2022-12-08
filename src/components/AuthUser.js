import { useDispatch } from "react-redux"
import { logout } from "../libs/redux/authReducer"

import Button from '@mui/material/Button';

const AuthUser = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <div>
            Authenticado
            <Button onClick={handleClick} variant="contained">Cerrar sesion</Button>
        </div >
    );
};

export default AuthUser;
