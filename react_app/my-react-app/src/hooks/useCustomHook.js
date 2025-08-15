import { useState, useEffect } from 'react';

const useCustomHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // Example side effect: log the value to the console
        console.log('Value changed:', value);
    }, [value]);

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return [value, updateValue];
};

export default useCustomHook;