import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props extends TouchableOpacityProps {
  color?: string;
  onPress: () => void;
}

export function BackButton({ color, onPress, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress} {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
