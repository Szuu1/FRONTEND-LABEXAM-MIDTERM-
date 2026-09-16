import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VALID_USERNAME = "pharmacist";
const VALID_PASSWORD = "med123";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName.trim() || !password) {
            setError("Username and password are required.");
            return;
        }

        if (
            userName === VALID_USERNAME &&
            password === VALID_PASSWORD
        ) {
            sessionStorage.setItem("isAuthenticated", "true");
            setError("");
            navigate("/Home", { replace: true });
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div>
            <h1>Drugs and Medicine Inventory System Login</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                            setError("");
                        }}
                    />
                </label>

                <br />

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                        }}
                    />
                </label>

                <br />

                <button type="submit">Login</button>

                {error && (
                    <p role="alert" style={{ color: "red" }}>
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}
