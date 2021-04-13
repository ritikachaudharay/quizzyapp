export const LOAD_ITEMS = "LOAD_ITEMS";

export const loadItems = () => {
    return async (dispatch) => {
        const items = await (await fetch('JSON/items.json')).json()
        dispatch({ type: LOAD_ITEMS, items })
    }
}