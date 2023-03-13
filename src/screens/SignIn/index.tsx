import { StatusBar } from "react-native";
import React from "react";
import { Container, Footer, Header, SubTitle, Title } from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";

export function SignIn() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </SubTitle>
      </Header>
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          disabled={false}
          loading={false}
        />
        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          light
          onPress={() => {}}
          disabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
