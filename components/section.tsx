function Section({ className, ...props }: React.ComponentProps<"section">) {
    return <section data-slot="section" className={className} {...props} />;
}

export { Section };
