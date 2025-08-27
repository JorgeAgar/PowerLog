import ListTable from "./ListTable";

const sampleDevices = [
  {
    nombre: "Refrigerador LG",
    categoria: "Electrodoméstico",
    total: 1200,
    ultimoMes: 150,
    ultimaSemana: 40,
    promedioMes: 145,
    promedioSemana: 38,
  },
  {
    nombre: "Computador Dell",
    categoria: "Oficina",
    total: 800,
    ultimoMes: 95,
    ultimaSemana: 25,
    promedioMes: 90,
    promedioSemana: 23,
  },
  {
    nombre: "Televisor Samsung",
    categoria: "Entretenimiento",
    total: 500,
    ultimoMes: 70,
    ultimaSemana: 18,
    promedioMes: 65,
    promedioSemana: 17,
  },
  {
    nombre: "Aire Acondicionado Midea",
    categoria: "Electrodoméstico",
    total: 2000,
    ultimoMes: 300,
    ultimaSemana: 85,
    promedioMes: 280,
    promedioSemana: 80,
  },
];

const ListView = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <h1 className="text-2xl font-bold">Lista de Dispositivos</h1>
      <ListTable devices={sampleDevices} />
    </div>
  );
};

export default ListView;
