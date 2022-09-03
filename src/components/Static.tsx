interface StaticProps {
  title: string;
  value: string;
  valueFormat: string;
}

export const Static = ({ title, value, valueFormat, ...rest }: StaticProps) => {
  return (
    <div className="max-w-[200px]" data-aos="fade-right" {...rest}>
      <h3 className="font-bold text-5xl">
        <span className="text-green-700">+{value}</span> {valueFormat}
      </h3>
      <div className="w-full h-1 bg-gradient-to-r from-purple-600 mt-2" />
      <p className="mt-7 text-sm">{title}</p>
    </div>
  );
};
