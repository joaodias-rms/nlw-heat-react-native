import React, { useState } from "react";

import { View, TextInput, Alert, Keyboard } from "react-native";

import { Button } from "../Button";

import { COLORS } from "../../theme";
import { styles } from "./styles";
import { api } from "../../services/api";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true)
      await api.post("/message", { message: messageFormatted });
      setMessage("");
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert("Mensagem enviada com sucesso");
    } else {
      Alert.alert("Escreva a mensagem");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance="dark"
        placeholder="Qual a expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        onChangeText={setMessage}
        value={message}
        maxLength={140}
        editable={!sendingMessage}
      />

      <Button
        title="Enviar Mensagem"
        color={COLORS.WHITE}
        backgroundColor={COLORS.PINK}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}
