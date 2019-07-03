/* eslint-disable import/prefer-default-export */
import { useSelector, useDispatch, useStore } from 'react-redux';
import { isLoadingSelector } from 'selectors/StatusSelectors';

export const usePaginatedElements = (action, selector, fetchMore) => {
  const state = useStore().getState();
  const dispatch = useDispatch();

  const { elements, count } = useSelector(selector);
  const hasMorePages = elements.length < count;

  const nextPage = () => {
    if (isLoadingSelector([action], state) || !hasMorePages) {
      return;
    }

    const offset = elements.length;
    dispatch(fetchMore(offset));
  };

  return {
    currentElements: elements,
    hasMorePages,
    nextPage,
  };
};
