import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import "./loginScreen.css"
import Loading from "../Loading/Loading.tsx"
import duda from "../../images/image.png"

const passwordMaxLength = 6;

function LoginScreen() {
    const [passKey, setPassKey] = useState(false);
    const [hidden, setHidden] = useState(false)

    const navigate = useNavigate();


    const changeScreen = (pass: any) => {
        const {value} = pass
        if (value.length === passwordMaxLength) {
            setHidden(true)
            setTimeout(() => setPassKey(true), 300)
            setTimeout(() => navigate("/desktop"), 2000)
        }
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
                            src={ duda }
                            alt="Perfil"
                            className="profileImage"
                        />
                        <h1 className="user">Marcos Vinicios</h1>
                        <input
                            type="password"
                            className="password"
                            placeholder="senha"
                            maxLength={6}
                            onInput={ ({target}) => changeScreen(target) }
                        />
                    </div>
            }
        </div>
    )
}

export default LoginScreen;