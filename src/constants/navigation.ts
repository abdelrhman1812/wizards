import {
  BookOpen,
  CircleHelp,
  FlaskConical,
  LayoutGrid,
  Settings,
  Users,
} from "lucide-react";

export const nav_links = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: Users, label: "Wizards" },
  { icon: FlaskConical, label: "Elixirs" },
  { icon: BookOpen, label: "Archives" },
];

export const bottom_nav_links = [
  { icon: Settings, label: "Settings", muted: true },
  { icon: CircleHelp, label: "Support", muted: true },
];
