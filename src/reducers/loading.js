const initialState = {
  showLoading: false,
};

const componentName = 'loading';

const ACTION_TYPES = {
  SHOW: componentName + 'SHOW',
  HIDE: componentName + 'HIDE',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW:
      return {
        ...state,
        showLoading: true,
      };
    case ACTION_TYPES.HIDE:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export const showLoading = () => ({
  type: ACTION_TYPES.SHOW,
});
export const hideLoading = () => ({
  type: ACTION_TYPES.HIDE,
});

export default reducer;
