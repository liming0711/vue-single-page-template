import * as types from './mutation-types';

const mutations = {
  [types.EXAMPLE] (state, example) {
    state.example = example;
  }
};

export default mutations;
