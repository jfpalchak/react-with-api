const topStoriesReducer = (state: StateType, action: ActionType) => {
  switch(action.type) {
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}


type ActionType = {
  type: string | null;
}

type StateType = {
  isLoaded: boolean;
  topStories: Article[];
  error?: string | null;
}

type Article = {
  title: string;
  abstract: string;
}

export default topStoriesReducer;