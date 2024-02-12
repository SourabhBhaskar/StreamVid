

export const windowWidthHeightReducer = (state, action) => {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
}