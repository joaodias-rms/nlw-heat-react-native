import React, { useState } from "react";

import { View, TextInput } from "react-native";

import { Button } from "../Button";

import { COLORS } from "../../theme";
import { styles } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

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
      />
    </View>
  );
}
