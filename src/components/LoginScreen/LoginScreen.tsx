import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./loginScreen.css"
import Loading from "../Loading/Loading.tsx"

const passwordMaxLength = 6;

function LoginScreen() {
    const [passKey, setPassKey] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        for(let i = 0; i <= 6; i++) {
            setTimeout(() => setPassword(password + '*'), 300);
            if(password.length == passwordMaxLength) {
                changeScreen();
                break;
            }
        }
    })

    const changeScreen = () => {
        setHidden(true)
        setTimeout(() => setPassKey(true), 300)
        setTimeout(() => navigate("/desktop"), 2000)
    }

    return(
        <div className="loginBack">
            {
                passKey
                    ? <Loading />
                    : <div
                    className={`login ${hidden && 'isHidden'}`}
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/98438915?v=4"
                            alt="Perfil"
                            className="profileImage"
                        />
                        <h1 className="user">Marcos Vinicios</h1>
                        <input
                            type="password"
                            className="password"
                            placeholder="senha"
                            value={password}
                            maxLength={6}
                        />
                    </div>
            }
        </div>
    )
}

export default LoginScreen;