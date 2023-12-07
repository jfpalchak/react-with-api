export type ActionType = {
  type: string | null;
  topStories?: Article[];
  error?: string;
}

export type StateType = {
  isLoaded: boolean;
  topStories?: Article[];
  error?: string | null;
}

export type Article = {
  title: string;
  abstract: string;
}

