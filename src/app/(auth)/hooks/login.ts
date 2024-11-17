import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

type LoginData = {
    email: string;
    password: string;
};

type UseLoginResult = {
    login: (data: LoginData) => Promise<void>;
    loading: boolean;
    error: string | null;
};

const useLogin = (): UseLoginResult => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (data: LoginData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post("http://schoolskyline.shop/api/login", data
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
            const token = response.data.token;
            Cookies.set("auth-log", token, { expires: 7 });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError("Failed to login. Please check your credentials.");
        }
    };

    return { login, loading, error };
};

export default useLogin;
