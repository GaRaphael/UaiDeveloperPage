"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "../components/feature-card";
import calca from "../../public/image/linha_calca.jpg";
import casual from "../../public/image/linha_casual.png";
import sapato from "../../public/image/linha_sapato.jpg";

export function Features() {
  return (
    <section className="">
      <div className="container mx-auto mb-20 text-center" style={{marginTop: '60px'}}>
        <Typography variant="h1" color="blue-gray" className="mb-4"
          placeholder={"Lótus Alfaiataria"}
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}>
          Categorias
        </Typography>
      </div>
      <div className="container mx-auto grid md:grid-cols-4">
        <FeatureCard
          image={casual.src}
          description="Linha Casual"
        />
        <FeatureCard
          image='https://www.chicprincess.com.br/wp-content/uploads/2023/03/blazer-feminino-slim-fit-acinturado-colorido-1.jpg'
          description="Linha Feminina"
        />
        <FeatureCard
          image={calca.src}
          description="Linha de Calças"
        />
        <FeatureCard
          image={sapato.src}
          description="Sapatos e Acessórios"
        />
      </div>
    </section>
  );
}
export default Features;
