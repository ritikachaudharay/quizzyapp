export const LOAD_RULES = "LOAD_RULES";

export const loadRules = () => {
    return async (dispatch) => {
        const rules = await (await fetch('JSON/rules.json')).json()
        dispatch({ type: LOAD_RULES, rules })
    }
}

