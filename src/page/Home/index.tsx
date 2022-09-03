import { ArrowRight } from "phosphor-react";
import { useEffect } from "react";
import aos from "aos";

import Background from "@/source/background-home.png";
import Thumbnail from "@/source/thumbnail-home.png";
import Google from "@/source/google-icon.png";
import Netflix from "@/source/netflix-icon.png";
import Twitch from "@/source/twitch-icon.png";

import { Platform } from "@/components/Platform";
import { Static } from "@/components/Static";

export const Home = () => {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

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
        <h2
          className="font-extrabold text-4xl max-w-[364px] mt-16 m-auto text-center"
          data-aos="fade-right"
        >
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
            <h2
              data-aos="fade-right"
              className="max-w-[590px] font-extrabold text-4xl mt-28"
            >
              Impulsionamos milhares de empresas
            </h2>

            <section className="flex flex-wrap justify-between my-36">
              <Static
                title="Milhões de request por horas em nosso serviço."
                value="1"
                valueFormat="M"
                data-aos-delay="0"
              />
              <Static
                title="Milhares de empresas utilizando o nosso serviço."
                value="1"
                valueFormat="mil"
                data-aos-delay="200"
              />
              <Static
                title="Milhões de Pessoas impactados pelo nosso serviço."
                value="10"
                valueFormat="M"
                data-aos-delay="400"
              />
            </section>
          </div>
        </section>
      </section>

      <section>
        <h2
          className="font-extrabold text-4xl max-w-[364px] mt-28 m-auto text-center"
          data-aos="fade-right"
        >
          Por que escolher a plataforma Fire?
        </h2>
        <p
          className="text-gray-700 max-w-[664px] text-center m-auto mt-7"
          data-aos="fade-right"
        >
          Empresas que confiam em nosso trabalho, utilizando nossa velocidade e
          escalabilidade.
        </p>

        <section className="max-w-[863px] flex flex-wrap justify-between my-16 m-auto items-center">
          <img src={Twitch} data-aos="fade-right" />
          <img src={Netflix} data-aos="fade-right" data-aos-delay="200" />
          <img src={Google} data-aos="fade-right" data-aos-delay="400" />
        </section>
      </section>
    </main>
  );
};
