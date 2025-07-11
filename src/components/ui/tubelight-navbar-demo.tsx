import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Services", url: "#services", icon: Briefcase },
    { name: "Blog", url: "/blog", icon: FileText },
    { name: "Contact Us", url: "/contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
} 