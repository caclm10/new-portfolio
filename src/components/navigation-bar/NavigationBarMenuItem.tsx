"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "../icon/Icon";
import { cn } from "@/lib";

interface NavigationBarMenuItemProps {
  icon: string;
  href: string;
}

const NavigationBarMenuItem = ({ icon, href }: NavigationBarMenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center",
        isActive ? "text-yellow-500" : "hover:text-yellow-500"
      )}
    >
      <Icon icon={icon} className="text-3xl" />
    </Link>
  );
};

export default NavigationBarMenuItem;
