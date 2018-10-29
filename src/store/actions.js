import * as types from './mutation-types';

export const setExample = ({commit}, example) => {
  commit(types.EXAMPLE, example);
};
