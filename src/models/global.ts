import { ModelType } from './types';
export interface GlobalStateType {
  title: string;
}
const Model: ModelType<GlobalStateType> = {
  namespace: 'global',
  state: {
    title: null,
  },

  effects: {},

  reducers: {
    test(state, { payload }) {
      state.title = 'hello umi';
    },
  },
};
export default Model;
