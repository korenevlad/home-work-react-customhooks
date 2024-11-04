import { useCallback, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        const valueJson = localStorage.getItem(key)
        if(valueJson && typeof valueJson === "string"){
            return JSON.parse(valueJson)
        }
    });

    const setItem = useCallback((newValue: LocalStorageSetValue) => {
        const newValueJson = JSON.stringify(newValue)
        localStorage.setItem(key, newValueJson)
        setValue(newValue);
    }, [])

    const removeItem = useCallback(() => {
        localStorage.removeItem(key)
        setValue("");
    }, [])
    
    return [
        value,
        {
            setItem,
            removeItem
        }
    ]
}