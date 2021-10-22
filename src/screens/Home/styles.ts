import { StyleSheet } from "react-native";

import { COLORS } from "../../theme";

import {getStatusBarHeight} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_SECONDARY,
    flex: 1,
    paddingTop: getStatusBarHeight() + 17
  },
});
