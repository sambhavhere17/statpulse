import {
  BarChart3,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Factory,
  Lightbulb,
  Megaphone,
  PackageCheck,
  PieChart,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  Factory,
  Lightbulb,
  Megaphone,
  PackageCheck,
  PieChart,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UsersRound,
  Workflow,
};

export function IconTile({
  name,
  size = 22,
  variant = "orange",
}: {
  name: string;
  size?: number;
  variant?: "orange" | "charcoal";
}) {
  const Icon = iconMap[name] ?? BarChart3;
  return (
    <span className={"icon-tile icon-tile--" + variant}>
      <Icon aria-hidden="true" size={size} strokeWidth={1.8} />
    </span>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}><Check aria-hidden="true" size={16} /><span>{item}</span></li>
      ))}
    </ul>
  );
}
