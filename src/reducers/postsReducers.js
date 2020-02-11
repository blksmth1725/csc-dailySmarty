import { SET_RECENT_POSTS } from "../actions/index";

const INIT_STATE = {
  posts: [],
  recentPosts: []
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      return [...state, recentPosts, action.payload];

    default:
      state;
  }
}
