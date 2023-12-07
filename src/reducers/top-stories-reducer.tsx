import * as c from '../actions/ActionTypes';
import { ActionType, StateType, Article } from "../types";

const topStoriesReducer = (state: StateType, action: ActionType): StateType => {
  switch(action.type) {
    case c.GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        topStories: action.topStories
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

export default topStoriesReducer;