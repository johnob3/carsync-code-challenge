export function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        let state = JSON.parse(serializedState)
        state.error = null;
        return state;
    } catch (err) {
        return undefined;
    }
};


export function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e)
    }
}