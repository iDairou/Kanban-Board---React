import { useState, useEffect } from 'react';

const useStorage = (key, initValue) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
export default useStorage;
