"use client";

import { CodeXmlIcon } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/utils/classname";
import { easeOutElastic } from "@/utils/easing";

function Features({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="features"
            className={cn("flex flex-col gap-6", className)}
            {...props}
        />
    );
}

function FeaturesTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="features-title"
            className={cn("text-xl font-semibold", className)}
            {...props}
        />
    );
}

function FeaturesList({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="features-list"
            className={cn("grid grid-cols-2 gap-10 sm:grid-cols-3", className)}
            {...props}
        />
    );
}

function FeaturesItem({
    title,
    description,
    className,
    icon: Icon,
    ...props
}: React.ComponentProps<typeof motion.div> & {
    title: string;
    description: string;
    icon?: React.ComponentType;
}) {
    return (
        <motion.div
            data-slot="features-item"
            className={cn("ease-in-out-back flex flex-col gap-2", className)}
            transition={{
                ease: easeOutElastic,
                duration: 0.8,
            }}
            whileHover={{
                translateY: "-0.6rem",
            }}
            {...props}
        >
            <span
                data-slot="features-item-icon"
                className="border-primary text-primary inline-flex size-9 items-center justify-center rounded-xl border [&_svg]:size-5"
            >
                {Icon ? <Icon /> : <CodeXmlIcon />}
            </span>
            <h4 data-slot="features-item-title" className="font-semibold">
                {title}
            </h4>
            <p
                data-slot="features-item-description"
                className="text-on-muted text-sm"
            >
                {description}
            </p>
        </motion.div>
    );
}

export { Features, FeaturesItem, FeaturesList, FeaturesTitle };
