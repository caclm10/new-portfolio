"use client";
import { Icon as IconifyIcon } from "@iconify/react";
import { cn } from "@/lib";

interface IconProps {
  className?: string;
  icon: string;
}

const Icon = ({ icon, className = "" }: IconProps) => {
  return <IconifyIcon icon={icon} className={cn("text-xl", className)} />;
};

export default Icon;
