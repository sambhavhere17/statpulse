import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={"section-header section-header--" + align}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
