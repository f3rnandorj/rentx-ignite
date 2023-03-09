import React, { useEffect, useState } from "react";
import { ListRenderItem, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import { Load } from "../../components/Load";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  const renderItem: ListRenderItem<CarDTO> = ({ item }) => (
    <Car data={item} onPress={handleCarDetails} />
  );
  const keyExtractor = (item: CarDTO) => item.id;

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </Container>
  );
}
