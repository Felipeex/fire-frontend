import Background from "@/source/background-home.png";
import Thumbnail from "@/source/thumbnail-home.png";

import { ArrowRight } from "phosphor-react";
import { Platform } from "@/components/Platform";

export const Home = () => {
  return (
    <main>
      <img
        src={Background}
        className="absolute object-cover object-top w-full -z-10 block h-[950px]"
        alt="Background de orbita"
      />

      <section className="flex items-center h-full flex-col">
        <div className="max-w-[863px] text-center mt-48">
          <span className="text-green-700 font-medium text-xl">
            👋 Sejá Bem-vindo
          </span>
          <h1 className="text-center text-6xl font-extrabold leading-[77px] m-auto mt-4">
            Acelere o desenvolvimento de seu negocio
          </h1>
          <p className="text-gray-600 text-lg max-w-[644px] text-center m-auto mt-7">
            Você podera escalar seu projeto com apis de alto nível aumentando
            sua qualidade e velocidade.
          </p>
        </div>

        <button className="flex items-center bg-purple-600 font-bold text-base py-3 px-4 rounded-lg mt-24 hover:bg-purple-700 transition-colors">
          CONHEÇA NOSSO TRABALHO
          <span className="bg-purple-700 p-2 rounded-lg ml-6">
            <ArrowRight size={24} />
          </span>
        </button>
        <img
          src={Thumbnail}
          className="m-auto mt-16"
          alt="Video de explicação."
        />
      </section>

      <section className="bg-black-700">
        <div className="h-16 w-[2px] bg-gradient-to-b from-purple-600 m-auto mt-16" />
        <h2 className="font-extrabold text-4xl max-w-[364px] mt-16 m-auto text-center">
          Por que escolher a plataforma Fire?
        </h2>

        <section className="flex flex-wrap max-w-[856px] m-auto justify-between gap-16 mt-28 pb-28">
          <Platform />
          <Platform />
          <Platform />
          <Platform />
          <Platform />
          <Platform />
        </section>

        <section className="bg-black-800 border-b border-t border-gray-900">
          <div className="max-w-[856px] m-auto">
            <h2 className="max-w-[590px] font-extrabold text-4xl mt-28">
              Impulsionamos milhares de empresas
            </h2>
          </div>
        </section>
      </section>
    </main>
  );
};
