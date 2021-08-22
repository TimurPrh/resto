const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: id
    };
};

const updateTotal = () => {
    return {
        type: 'UPDATE_CART_COST',
    };
};

const incItem = (id) => {
    return {
        type: 'INC_ITEM_COUNT',
        payload: id
    };
};

const decItem = (id) => {
    return {
        type: 'DEC_ITEM_COUNT',
        payload: id
    };
};

// const updateCartCount = () => {
//     return {
//         type: 'UPDATE_CART_COUNT',
//     };
// };

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    updateTotal,
    incItem,
    decItem
};