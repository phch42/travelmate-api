import { useEffect, useState } from "react";

export function useFetch<T>(url: string): { data: T | undefined };
export function useFetch<T>(urls: string[]): { data: T[] | undefined };

export function useFetch<T>(urlOrUrls: string | string[]) {
    const [data, setData] = useState<T | T[]>();

    useEffect(() => {
        if (Array.isArray(urlOrUrls)) {
            if (urlOrUrls.length === 0) {
                setData([]);
                return;
            }

            Promise.all(
                urlOrUrls.map((url) =>
                    fetch(url).then((response) => response.json())
                )
            ).then((results) => {
                setData(results as T[]);
            });

            return;
        }

        if (!urlOrUrls) {
            return;
        }

        fetch(urlOrUrls)
            .then((response) => response.json())
            .then((result) => setData(result));
    }, [
        Array.isArray(urlOrUrls)
            ? urlOrUrls.join("|")
            : urlOrUrls,
    ]);

    return { data };
}