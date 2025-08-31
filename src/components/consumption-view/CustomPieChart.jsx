import { PieChart, Pie, Tooltip } from "recharts";
import { Movement } from "./Movement";

const CustomTooltip = ({ active, payload }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {isVisible && (
        <Movement name={payload[0].name} value={payload[0].value} units="kWh" />
      )}
    </div>
  );
};

const CustomPieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
  return (
    <div className="relative w-[400px] h-[400px]">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={"100%"}
          innerRadius={"50%"}
        />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="font-bold text-4xl -z-10">${total}</p>
      </div>
    </div>
  );
};

export default CustomPieChart;
