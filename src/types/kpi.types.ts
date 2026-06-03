import type { LucideIcon } from "lucide-react";

export interface KPIT {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  valueColor: string;
  descriptionColor: string;
}
