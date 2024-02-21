export const ADD = (item) => {
    // console.log(item);
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove items
export const DLT = (id) => {
    // console.log(item);
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual item
export const REMOVE = (item) => {
    // console.log(item);
    return {
        type: "RMV_ONE",
        payload: item
    }
}
