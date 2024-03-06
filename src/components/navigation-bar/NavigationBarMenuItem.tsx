"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { IconifyIcon } from "@iconify/types";
import Icon from "../icon/Icon";
import { cn } from "@/lib";

interface NavigationBarMenuItemProps {
  icon: IconifyIcon;
  href: string;
  name: string;
}

const NavigationBarMenuItem = ({
  icon,
  href,
  name,
}: NavigationBarMenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center transition",
        isActive ? "text-primary" : "hover:text-primary"
      )}
      title={name}
    >
      <Icon icon={icon} className="text-3xl" />
    </Link>
  );
};

export default NavigationBarMenuItem;
