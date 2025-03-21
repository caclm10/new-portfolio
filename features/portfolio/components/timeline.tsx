import { DotIcon } from "lucide-react";

import { cn } from "@/utils/classname";

function Timeline({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="timeline"
            className={cn("flex flex-col gap-4", className)}
            {...props}
        />
    );
}

function TimelineTitle({ className, ...props }: React.ComponentProps<"h3">) {
    return (
        <h3
            data-slot="timeline-title"
            className={cn("text-xl font-semibold", className)}
            {...props}
        />
    );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className="flex gap-2">
            <div>
                <DotIcon className="size-8" />
            </div>
            <div
                data-slot="timeline-item"
                className={cn("mt-[3px] flex flex-col gap-2", className)}
                {...props}
            />
        </div>
    );
}

function TimelineDetail({
    variant = "default",
    className,
    ...props
}: React.ComponentProps<"span"> & { variant?: "default" | "description" }) {
    return (
        <span
            data-slot="timeline-detail"
            data-variant={variant}
            className={cn("data-[variant=description]:text-xs", className)}
            {...props}
        />
    );
}

export { Timeline, TimelineDetail, TimelineItem, TimelineTitle };
