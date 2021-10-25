import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AvatarImg from "../../assets/avatar.png";

import { styles } from "./styles";
import { COLORS } from "../../theme";

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
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{x: 0, y: 0.8}}
      end={{x:0.9, y:1}}
      style={[
        styles.container,
        { width: containerSize, height: containerSize, borderRadius: containerSize / 2 },
      ]}
    >
      <Image
        source={{ uri: imageUri || Avatar_Default }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
