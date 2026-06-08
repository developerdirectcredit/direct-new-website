import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#F87171", "#8B5CF6"];

export default function DoughnutChart({
  principal,
  interest,
}) {
  const data = [
    {
      name: "Interest",
      value: interest,
    },
    {
      name: "Principal",
      value: principal,
    },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}