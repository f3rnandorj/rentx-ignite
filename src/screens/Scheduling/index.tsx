import React from "react";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";

import ArrowSvg from "../../assets/arrow.svg";

import { useTheme } from "styled-components";
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from "./styles";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={handleGoBack} />
        <Title>
          Escolha uma {"\n"}data de início e {"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected>18/03/2023</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
