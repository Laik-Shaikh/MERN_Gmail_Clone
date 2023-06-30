import { useState } from "react";
import { API } from "../api/api";


const useApi = (urlObject) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');

    const call = async(payload, type) => {
        try {
            setLoading(true);
            let { data } = await API(urlObject, payload, type);
            setResponse(data);
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }

    return { call, error, loading, response };
}

export { useApi };