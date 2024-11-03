import { useEffect, useState } from "react";

export function useFetch(url){
    const [appState, setAppState] = useState(
        {
            isLoading: false,
            data: null,
            error: false,
            refetch: null
        }
    )

    useEffect(() => {
        setAppState({isLoading: true})
        const sendAsync = async () => {
            await fetch(url)
                .then(response => response.json())
                .then(res => setAppState({isLoading: false, data: res}))
                .catch(
                    error => {
                        setAppState({error: true})
                    }
                )
        }
        sendAsync();
    }, [])

    return {
        data: appState.data,
        isLoading: appState.isLoading,
        error: appState.error
        
    }
}

// const refetch = async ({props}) => {
//     const options = props
//     const limit = options._limit
//     const urlWithLimit = url + `?_limit=${limit}`;
//     sendAsync(urlWithLimit);
// }