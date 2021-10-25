import React, { useState, useEffect } from "react";

import { ScrollView } from "react-native";
import { api } from "../../services/api";
import { io } from "socket.io-client";
import { MESSAGES_EXAMPLE } from "../../utils/messages";
import { Message, MessageProps } from "../Message";

import { styles } from "./styles";

let messageQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (new_message) => {
  messageQueue.push(new_message);
  console.log(new_message);
});

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessage() {
      const message = await api.get("/message/last3");
      setCurrentMessages(message.data);
    }
    fetchMessage();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messageQueue[0],
          prevState[0],
          prevState[1],
        ]);
        messageQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer)
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
