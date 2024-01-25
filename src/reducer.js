
const markdownReducer = (state = {input: ''}, action) => {
    switch (action.type) {
        case ('INPUT'):
            return {
                input: action.payload
            };
        default: 
            return state;
    }
};
export default markdownReducer;