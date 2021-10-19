import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forceResetPassword } from "../../actions/users";
import { useHistory } from "react-router";

export default function ResetPassword({ token, id }) {
    const dispatch = useDispatch();
    const history= useHistory();
    const [input, setInput] = useState({ password: "", password2: "" });
    const [error, setError] = useState("");
    const { user } = useSelector((state) => state.users);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (input.password !== input.password2) {
            setError("Las contraseñas no coinciden");
        } else {
            setError(null);
        }
    }, [input, setError]);

    const handleSubmit = async (e) => {
        const body = {
            id: id,
            campo: 'resetPasswordForce',
            update: false
          }
        const handlePass = await axios
            .put(`https://leomonay-tequiero.herokuapp.com//users/passwordReset/${token}`, {
                password: input.password,
                password2: input.password2,
            })
            .then((res) => {
                if (res.status === 204) {
                    setError("Token invalido o expirado");
                } else {
                    dispatch(forceResetPassword(body));
                    toast.success("Se ha enviado un email a tu correo", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    history.replace("/auth/login");
                }
            });
    };

    return (
        <div>
            <>
                {/* {console.log(token)} */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div>
                    <h1>Cambiar contraseña</h1>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            name="password2"
                            type="password"
                            placeholder="Repite contraseña"
                        />
                    </div>
                    {!error && input.password ? (
                        <input
                            type="submit"
                            onClick={handleSubmit}
                            value="Cambiar"
                        />
                    ) : (
                        <p>{error}</p>
                    )}
                </div>
            </>
        </div>
    );
}
