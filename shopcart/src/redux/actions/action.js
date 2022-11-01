
export let ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const DLT = (id)=>{
    return {
        type:"RMV_CART",
        payload:id
    }
}