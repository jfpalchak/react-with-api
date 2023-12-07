export type ActionType = {
  type: string | null;
  topStories?: Article[] | string;
}

export type StateType = {
  isLoaded: boolean;
  topStories?: Article[] | string;
  error?: string | null;
}

export type Article = {
  title: string;
  abstract: string;
}

