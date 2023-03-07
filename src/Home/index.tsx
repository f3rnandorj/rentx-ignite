import React from "react";
import { StatusBar } from "react-native";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

import Logo from "../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../components/Car";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://www.audicentersalvador.com.br/assets/uploads/nt_veiculos/11459-Imagem-topo_-597-x-340.png?v=2",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({}) => <Car data={carData} />}
      />
    </Container>
  );
}
