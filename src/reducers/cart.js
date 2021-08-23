const initialState = {
    epa: false,
    count: 0
};

const _5minutes = 300000

const componentName = 'CART_';

const ACTION_TYPES = {
  SET: componentName + 'SET',
  UPDATE: componentName + 'UPDATE',
  RESET: componentName + 'RESET',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET:
      return {
        count : action.count || 0,
        epa : action.epa || false,
      }
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        count : state.count + action.count,
        epa : ((state.count + action.count)  > 0) ? (new Date().getTime())  + _5minutes : false // 0.3M = 5 minutes 
      };
    case ACTION_TYPES.RESET:
      return {
        count : 0,
        epa : false
      };
    default:
      return state;
  }
};

export const setCart = (cartData) => ({
  type: ACTION_TYPES.SET,
  ...cartData
})

export const updateCart = (count) => ({
  type: ACTION_TYPES.UPDATE,
  count : count

});
export const resetCart = () => ({
  type: ACTION_TYPES.RESET,
});

export default reducer;
