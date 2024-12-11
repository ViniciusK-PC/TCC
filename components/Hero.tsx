

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-blue-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            Cortador Tramontina
          </h1>
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
          R$ 900,60 à vista ou R$ 948,00 em até 10x de R$ 94,80 sem juros
          </h1>
          <p className="text-white max-sm:text-sm">
          Cortador de Grama Elétrico Tramontina CE35P com Diâmetro de Corte de 350 mm Coletor Rígido e Chassi de Plástico 1300 W 220 V
          Informações técnicas
- Motor com 1300 W de potência, 220 V, 60 Hz.
- Diâmetro de corte de 350 mm.
- Fixa-cabo, evita que o cabo elétrico desconecte do plug.
- Design e ergonomia que facilitam o uso.
- Chassi plástico de alta resistência.
- Lâmina posicionada acima do nível do chassi, evitando que objetos sejam lançados em direção ao operador e pessoas próximas.
- Peças metálicas possuem pintura eletrostática a pó, que tem uma melhor apresentação visual e maior proteção contra oxidação.
- Interruptor de duplo acionamento.
- Braço metálico, com isolamento.
- Alça para facilitar o transporte.
- Prático sistema de regulagem da altura de corte.
- Três alturas de corte: 23 mm, 38 mm e 53 mm.
- Cesto coletor rígido de 18 litros.
- Área de corte indicada de 1.300 m².
- Produto fabricado no Brasil.
- Rede de Assistência Técnica em todo o Brasil. Acesse:
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
            COMPRAR AGORA
            </button>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
            SABER MAIS
            </button>
          </div>
        </div>
        <Image
          src="/cort.jpg"
          width={400}
          height={400}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
