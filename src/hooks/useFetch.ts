import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => setData(result));
    }, [url]);

    return { data };
}