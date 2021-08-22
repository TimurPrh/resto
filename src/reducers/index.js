const initialState = {
    menu: [],
    items: [],
    loading: true,
    error: false,
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            if (state.items.find(item => item.id === id)) {
                const itemIndexAdded = state.items.findIndex(item => item.id === id);
                state.items[itemIndexAdded].count ++;
                return {
                    ...state
                }
            }
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                price: item.price,
                id: item.id,
                count: 1
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        case 'ITEM_REMOVED_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        case 'UPDATE_CART_COST':
            let newTotal = 0;
            state.items.forEach((item) => {
                newTotal += (item.price * item.count);
            });
            
            return {
                ...state,
                total: newTotal
            }
        case 'INC_ITEM_COUNT':
            const idInc = action.payload;
            const itemIncIndex = state.items.findIndex(item => item.id === idInc);
            const newIncItems = state.items.slice(0);
            newIncItems[itemIncIndex].count ++;
            return {
                ...state,
                items: newIncItems
            }
        case 'DEC_ITEM_COUNT':
            const idDec = action.payload;
            const itemDecIndex = state.items.findIndex(item => item.id === idDec);
            const newDecItems = state.items.slice(0);
            newDecItems[itemDecIndex].count --;
            if (newDecItems[itemDecIndex].count === 0) {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemDecIndex),
                        ...state.items.slice(itemDecIndex + 1)
                    ]
                }
            }
            return {
                ...state,
                items: newDecItems
            }
        default:
            return state;
    }
}

export default reducer;