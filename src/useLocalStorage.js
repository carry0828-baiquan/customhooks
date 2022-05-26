import React, {useEffect, useState} from "react";

function  getLocalStorage(key, initialValue) {
  const savedVal = JSON.parse(localStorage.getItem(key));
  if (savedVal) {
    return savedVal;
  }
  if(initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
}


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        return getLocalStorage(key, initialValue);

    });
    useEffect(() => {
        return () => {
           localStorage.setItem(key, JSON.stringify(storedValue));
        };
    }, [storedValue, key]);

    return [storedValue, setStoredValue];
}