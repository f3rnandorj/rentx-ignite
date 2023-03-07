import React from "react";
import { BackButton } from "../../components/BackButton";
import { Container, Header } from "./styles";

export function CarDetails() {
  function handleGoBack() {}

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
    </Container>
  );
}
