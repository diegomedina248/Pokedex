import { actionTypes } from 'actions/GlobalActions';
import { LOADING, SUCCESS, ERROR } from 'helpers/Status';

export default (state = {}, action) => {
  const { type } = action;

  if (type === actionTypes.GLOBAL_RESET) return {};

  const matchesStart = /(.*)_(REQUEST)/.exec(type);
  const matchesError = /(.*)_(ERROR)/.exec(type);
  const matchesReset = /(.*)_(RESET)/.exec(type);
  const matchesSuccess = /(.*)_(SUCCESS)/.exec(type);

  if (matchesReset) {
    const [, key] = matchesReset;
    const newState = { ...state };
    delete newState[key];
    return newState;
  }

  let status = null;
  let key = null;

  if (matchesStart) {
    [, key] = matchesStart;
    status = LOADING;
  } else if (matchesError) {
    [, key] = matchesError;
    status = ERROR;
  } else if (matchesSuccess) {
    [, key] = matchesSuccess;
    status = SUCCESS;
  }

  if (!key) {
    return state;
  }

  return {
    ...state,
    [key]: status,
  };
};
