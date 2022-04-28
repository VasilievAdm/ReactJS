import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

interface Chat {
  idx: string;
  name: string;
}

interface ChatListProps {
  chats: Chat[];
}

export const ChatList: FC<ChatListProps> = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: 160 }}>
      {props.chats.map((chat) => (
        <ListItem
          key={chat.idx}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};
