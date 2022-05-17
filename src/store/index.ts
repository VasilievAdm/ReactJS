import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatReducer, ChatsState } from './chats/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

export const store = createStore(
  combineReducers<StoreState>({
    profile: profileReducer,
    chats: chatReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
