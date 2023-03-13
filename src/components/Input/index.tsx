import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconContainer, InputText } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  isFocused: boolean;
}

export function Input({ iconName, isFocused, ...rest }: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText isFocused={isFocused} {...rest} />
    </Container>
  );
}
