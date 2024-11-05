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
            .then(res => setAppState(
                prevState => ({
                     ...prevState, 
                     data: res,
                     isLoading: false
                })))
            .catch(error => setAppState(
                prevstate => ({
                    ...prevstate,
                    isLoading: false,
                    error: true
                })))
    }, []);

    const refetch = useCallback(({ params }) => {
        const limit = params._limit
        const urlWithLimit = `${url}?_limit=${limit}`;
        sendAsync(urlWithLimit);
    }, [])

    useEffect(() => {
        setAppState(
            prevState => ({
                ...prevState,
                isLoading: true
            }));
        sendAsync(url);
    }, [])

    return {
        data: appState.data,
        isLoading: appState.isLoading,
        error: appState.error,
        refetch
    }
}