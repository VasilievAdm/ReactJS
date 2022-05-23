import { nanoid } from 'nanoid';
import { StoreState } from '..';

export const selectChats = (state: StoreState) => state.chats;

export const selectChatList = (state: StoreState) =>
  Object.keys(state.chats).map((chat) => ({
    id: nanoid(),
    name: chat,
  }));
