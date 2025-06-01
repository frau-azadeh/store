import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card className="p-4 flex items-center gap-4">
      <div className="text-primary">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </Card>
  );
}
