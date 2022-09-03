import Cert from "@/source/cert-icon.svg";

export const Platform = ({ ...rest }) => {
  return (
    <div
      className="flex flex-col gap-4 items-start"
      {...rest}
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <img src={Cert} alt="Certificado" />
      <span className="font-bold text-3xl">Formação completa</span>
      <p className="text-gray-700 max-w-[380px]">
        O mapa completo para você impulsionar sua evolução e acessar as melhores
        oportunidades da sua carreira como dev.
      </p>
    </div>
  );
};
