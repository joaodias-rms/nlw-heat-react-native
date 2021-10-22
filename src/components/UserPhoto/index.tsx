import React from "react";
import { Image } from "react-native";

import AvatarImg from "../../assets/avatar.png";

import { styles } from "./styles";

const Sizes = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  normal: {
    containerSize: 48,
    avatarSize: 42,
  },
};

const Avatar_Default = Image.resolveAssetSource(AvatarImg).uri;

type Props = {
  imageUri: string | undefined;
  sizes?: "small" | "normal";
};
export function UserPhoto({ imageUri, sizes = "normal" }: Props) {
  const { containerSize, avatarSize } = Sizes[sizes];

  return (
    <Image
      source={{ uri: imageUri || Avatar_Default}}
      style={[
        styles.avatar,
        { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
      ]}
    />
  );
}
