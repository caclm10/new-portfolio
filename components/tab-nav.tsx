"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/utils/classname";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TabNav(
    props: React.ComponentProps<typeof NavigationMenuPrimitive.Root>,
) {
    return <NavigationMenuPrimitive.Root data-slot="tab-nav" {...props} />;
}

function TabNavList({
    className,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
    return (
        <NavigationMenuPrimitive.List
            data-slot="tab-nav-list"
            className={cn("flex items-center gap-5", className)}
            {...props}
        />
    );
}

function TabNavLink({
    href,
    className,
    children,
    ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <NavigationMenuPrimitive.Link
            data-slot="tab-nav-link"
            active={isActive}
            className={cn(
                "text-primary hover:bg-primary/10 inline-flex items-center justify-center rounded-xl px-2.5 py-1.5 text-sm transition-colors",
                "data-[active]:bg-primary data-[active]:text-on-primary data-[active]:font-semibold",
            )}
            asChild={!!href}
            {...props}
        >
            {href ? <Link href={href}>{children}</Link> : children}
        </NavigationMenuPrimitive.Link>
    );
}

export { TabNav, TabNavLink, TabNavList };
