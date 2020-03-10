import React from 'react'
import {useWindowSize} from '@magento/peregrine'

const WindowSizeLogger = () => {

    const window = useWindowSize();

    console.log(window);

    return null; 
}

const useCartTrigger = props => {
    const { createCartMutation, getCartDetailsQuery } = props;
    const [, { toggleDrawer }] = useAppContext();
    const [{ derivedDetails }, { getCartDetails }] = useCartContext();
    const { numItems: itemCount } = derivedDetails;

    const [fetchCartId] = useMutation(createCartMutation);
    const fetchCartDetails = useAwaitQuery(getCartDetailsQuery);

    useEffect(() => {
        getCartDetails({
            fetchCartId,
            fetchCartDetails
        });
    }, [fetchCartDetails, fetchCartId, getCartDetails]);

    const handleClick = useCallback(async () => {
        toggleDrawer('cart');
        await getCartDetails({
            fetchCartId,
            fetchCartDetails
        });
    }, [fetchCartDetails, fetchCartId, getCartDetails, toggleDrawer]);

    return {
        handleClick,
        itemCount
    };
};

export default WindowSizeLogger;