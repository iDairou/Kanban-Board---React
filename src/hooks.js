import { useState, useEffect } from 'react';

const useStorage = (name) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        // eslint-disable-next-line no-undef
        localStorage.setItem(name, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};
export default useStorage;
