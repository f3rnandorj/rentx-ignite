import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { CarImages, Container, Header } from "./styles";

export function CarDetails() {
  function handleGoBack() {}

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.audicentersalvador.com.br/assets/uploads/nt_veiculos/11459-Imagem-topo_-597-x-340.png?v=2",
          ]}
        />
      </CarImages>
    </Container>
  );
}
