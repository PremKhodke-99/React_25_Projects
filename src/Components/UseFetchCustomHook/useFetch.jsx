import React, { useEffect, useState } from 'react'

function useFetch(url, options = {}) {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(url, { ...options });

            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err, "Some error occured");
        } finally {
            setPending(false);
        }
    }

    useEffect(() => {

        fetchData();

    }, [url])

    return { data, error, pending };
}

export default useFetch;