import { LOADING, ERROR, SUCCESS } from '../helpers/Status';

export const statusSelector = (
  action,
  state,
) => state.status[action];

export const hasStatusSelector = (
  action,
  status,
  state,
) => state.status[action] === status;

export const isLoadingSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`];
    return prevState || status === LOADING;
  },
  false,
);

export const hasErrorsSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`];
    return prevState || status === ERROR;
  },
  false,
);

export const successSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`];
    return prevState && status === SUCCESS;
  },
  true,
);

export const fullStatusSelector = (action, state) => {
  const status = state.status[`${action}`];
  const error = state.error[`${action}`];
  const isLoading = status === LOADING;
  return {
    status,
    isLoading,
    error,
  };
};
