import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

type Props = {
  data: { units: number; profit: number }[];
};

export default function ProfitChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="units" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#2563eb"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};