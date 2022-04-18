import React, { useCallback, useEffect, useState } from "react";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Author } from "./components/Author/Author";
import { MessageList } from "./components/MessageList/MessageList";

export const Form = () => {
  const [value, setValue] = useState("");
  const [author, setAuthor] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleClick = useCallback(() => {
    setMessageList([...messageList, { value, author }]);
    setValue("");
    setAuthor(author);
  }, [messageList, value, author]);

  const handleChangeM = useCallback((ev) => {
    setValue(ev.target.value);
  }, []);

  const handleChangeA = useCallback((ev) => {
    setAuthor(ev.target.value);
  }, []);

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === ""
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", value: "Enter your name." },
        ]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      };
    } else if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].value === "" &&
      messageList[messageList.length - 1].author !== ""
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", value: "Your message is empty." },
        ]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      };
    } else if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== "Bot"
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          { author: "Bot", value: "Thank you for your appeal." },
        ]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      };
    }
  }, [messageList]);

  return (
    <>
      <MessageList messages={messageList} />
      <Author change={handleChangeA} value={value} />
      <Input change={handleChangeM} value={value} />
      <Button name={"Send"} click={handleClick} disabled={!author} />
    </>
  );
};
