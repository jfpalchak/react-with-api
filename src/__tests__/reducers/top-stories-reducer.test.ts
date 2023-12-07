import topStoriesReducer from '../../reducers/top-stories-reducer';
import * as c from '../../actions/ActionTypes';

describe('topStoriesReducer', () => {

  let action: ActionType;

  type ActionType = {
    type: string | null;
    topStories?: Article[];
    error?: string
  }

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  }

  const testArticle: Article = {
    title: "Title",
    abstract: "Abstract"
  };

  type Article = {
    title: string;
    abstract: string;
  }

  test('should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        topStoriesReducer(initialState, { type: null })
      })
      .toThrowError('There is no action matching null.');
  });

  test('successfully getting top stories should change isLoaded to true and update topStories', () => {
    const topStories = [testArticle];
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [testArticle],
      error: null
    });
  });

  test('failing to get topStories should change isLoaded to true and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error: error
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [],
      error: "An error"
    });
  });

});