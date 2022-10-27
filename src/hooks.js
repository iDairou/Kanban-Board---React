import { useState, useEffect } from 'react';

const getSavedValue = (key, initValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) {
        return savedValue;
    }
    return initValue;
};

const useStorage = (key, initValue) => {
    const [value, setValue] = useState(initValue);

    return [value, setValue];
};
export default useStorage;
