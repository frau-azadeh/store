import StatsCard from "@/components/dashboard/StatsCard";
import { ShoppingCart, DollarSign, Package } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatsCard
        title="سفارشات"
        value="320"
        icon={<ShoppingCart size={32} />}
      />
      <StatsCard
        title="فروش"
        value="45,000,000 تومان"
        icon={<DollarSign size={32} />}
      />
      <StatsCard title="محصولات" value="150" icon={<Package size={32} />} />
    </div>
  );
}
