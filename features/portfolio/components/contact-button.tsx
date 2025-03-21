import { Button } from "@/components/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

interface ContactButtonProps extends React.ComponentProps<typeof Button> {
    url: string;
    label: string;
    alt: string;
    icon: React.ComponentType;
}
function ContactButton({
    url,
    label,
    alt,
    icon: Icon,
    variant = "ghost",
    ...props
}: ContactButtonProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    type="button"
                    variant={variant}
                    size="icon"
                    asChild
                    {...props}
                >
                    <a href={url} target="_blank">
                        <Icon data-slot="contact-button-icon" />
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
