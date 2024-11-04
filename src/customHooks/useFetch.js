import { useCallback, useEffect, useState } from "react";

export function useFetch(url){
    const [appState, setAppState] = useState(
        {
            data: null,
            isLoading: false,
            error: false
        }
    )

    const sendAsync = useCallback(async (paramUrl) => {
        fetch(paramUrl)
            .then(response => response.json())
            .then(res => setAppState({isLoading: false, data: res, error: false}))
            .catch(error => setAppState({isLoading: false, data: null, error: true}))

    }, []);

    const refetch = useCallback(({ params }) => {
        const limit = params._limit
        const urlWithLimit = `${url}?_limit=${limit}`;
        sendAsync(urlWithLimit);
    }, [])

    useEffect(() => {
        setAppState({isLoading: true});
        sendAsync(url);
    }, [])

    return {
        data: appState.data,
        isLoading: appState.isLoading,
        error: appState.error,
        refetch
    }
}