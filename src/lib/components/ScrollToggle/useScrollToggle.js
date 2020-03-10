import { useState } from 'react';

import { useScrollLock } from '@magento/peregrine';

const useScrollToggle = () => {
    const [locked, setLocked] = useState(false);

    useScrollLock(locked);

    const clickHandler = () => {
        setLocked(!locked);
    };

    return {
        locked,
        clickHandler
    };
};

export default useScrollToggle;