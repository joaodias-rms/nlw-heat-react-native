import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import LogoSVG from "../../assets/logo.svg";

import { UserPhoto } from "../UserPhoto";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSVG />
      <UserPhoto imageUri="https://github.com/joaodias-rms.png"/>
      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
