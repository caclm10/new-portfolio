import { Button } from "@/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

interface ContactButtonProps {
    url: string;
    label: string;
    alt: string;
    icon: React.ComponentType;
}
function ContactButton({ url, label, alt, icon: Icon }: ContactButtonProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button type="button" variant="ghost" size="icon" asChild>
                    <a href={url} target="_blank">
                        <Icon />
                        <span className="sr-only">{alt}</span>
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <span>{label}</span>
            </TooltipContent>
        </Tooltip>
    );
}

export { ContactButton };
