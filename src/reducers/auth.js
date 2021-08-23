// import { find } from 'lodash';

const componentName = '';

const ACTION_TYPES = {
  setProfile: componentName + 'UPDATE_USER',
};

const initialState = {
  me: null,
  userLoaded: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.setProfile:
      return {
        ...state,
        userLoaded: true,
        me: action.data,
      };

    default:
      return state;
  }
};

export default reducer;

export const setProfile = (profile) => ({
  type: ACTION_TYPES.setProfile,
  profile: profile,
});
