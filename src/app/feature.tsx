"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Interface Dinâmica",
    children:
      "Acesse seu protótipo em qualquer lugar, a qualquer hora, com uma interface fácil de usar e amigável.",
  },
  {
    icon: HeartIcon,
    title: "Desenvolvimento Iterativo",
    children:
      "Expresse a sua ideia de forma eficaz e eficiente.",
  },
  {
    icon: LockClosedIcon,
    title: "Total Segurança e Privacidade",
    children:
      "Mantenha seus dados seguros e protegidos com a nossa plataforma de segurança de última geração.",
  },
  {
    icon: LightBulbIcon,
    title: "Acompanhamento de progresso personalizado",
    children:
      "Fique por dentro da jornada de implementação com acompanhamento de progresso e recomendações personalizadas para mantê-lo atualizado.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Deixe a aplicação com a sua cara
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Diversos recursos de personalização
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
