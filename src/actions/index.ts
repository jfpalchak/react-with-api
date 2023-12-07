import { Article, ActionType } from '../types';
import * as c from './ActionTypes';

export const getTopStoriesSuccess = (topStories: Article[] | string): ActionType => ({
  type: c.GET_TOP_STORIES_SUCCESS,
  topStories
});

export const getTopStoriesFailure = (error: string): ActionType => ({
  type: c.GET_TOP_STORIES_FAILURE,
  error
});