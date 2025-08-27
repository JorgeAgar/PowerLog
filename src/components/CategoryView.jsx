import CategoryLabel from "./CategoryLabel";
import CategoryText from "./CategoryText";
import CustomPieChart from "./CustomPieChart";

const data = [
  { name: "Name a", value: 200, fill: "#FF0000" },
  { name: "Name b", value: 400, fill: "#00FF00" },
  { name: "Name c", value: 300, fill: "#0000FF" },
];

const CategoryView = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-gray-100 mt-32 py-24">
      <CategoryLabel category="Categoría" />
      <CustomPieChart data={data} />
      <CategoryText text="Descripción de la categoría o texto interesante" />
    </section>
  );
};

export default CategoryView;
