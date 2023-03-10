import React, { useEffect, useState } from "react";
import { ListRenderItem, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import Logo from "../../assets/logo.svg";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
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
    <Car data={item} onPress={() => handleCarDetails(item)} />
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
          <TotalCars>Total de {cars.length} carros</TotalCars>
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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
