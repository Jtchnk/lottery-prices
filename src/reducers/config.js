// import { find } from 'lodash';

const componentName = '';

const ACTION_TYPES = {
  setConfig: componentName + 'UPDATE_CONFIG',
};

const initialState = {
  // webConfig: {
  lotteryPrice: 80,
  feePrice: 20,
  isRoundClosed: false,
  roundDate: '',
  showResult: false,
  // },
  configLoaded: false,
  liveScan: "",
  nextRound: "",
  topNews: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.setConfig:
      //console.log(action.data);
      return {
        ...state,
        ...action.data,
        configLoaded: true,
      };

    default:
      return state;
  }
};

export default reducer;

export const setConfig = (config) => ({
  type: ACTION_TYPES.setConfig,
  config: config,
});
