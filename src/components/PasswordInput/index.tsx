import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { Container, IconContainer, InputText } from "./styles";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";
import { TouchableOpacity } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  isFocused: boolean;
}

export function PasswordInput({ iconName, isFocused, ...rest }: InputProps) {
  const [isPasswordVisible, setIsPasswordsVisible] = useState(true);

  const theme = useTheme();

  function handleChangeVisibilityChange() {
    setIsPasswordsVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        {...rest}
        secureTextEntry={isPasswordVisible}
      />

      <TouchableOpacity onPress={handleChangeVisibilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  );
}
