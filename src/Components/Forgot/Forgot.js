import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Zoom, Slide, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forgot() {
    const [input, setInput] = useState({ email: "" });
    const { user } = useSelector((state) => state.users);
    const { push } = useHistory();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        toast.success("Se ha enviado un email a tu correo", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const response = await axios.post(
            "https://leomonay-tequiero.herokuapp.com//users/forgot",
            {
                email: input.email,
            }
        );
        if (response.status === 404) {
        } else {
            console.log(response.data);
            push("/password?id=" + response.data.id);
        }
    };

    return (
        <div>
            <>
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
                    <h1>Olvidaste tu contraseña</h1>
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Ingresa tu Email"
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="Enviar"
                    />
                </div>
            </>
        </div>
    );
}
