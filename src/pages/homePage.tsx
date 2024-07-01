import img from "../assets/banner-desconto.png";

export function HomePage() {
  return (
    <div className="p-5">
      <img
        src={img}
        alt="Até 55% de desconto esse mês"
        className="h-auto w-full"
      />
    </div>
  );
}
