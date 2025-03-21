import Image from "next/image";

import {
    Modal,
    ModalBody,
    ModalCancel,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTrigger,
} from "@/components/modal";
import { ScrollArea } from "@/components/scroll-area";
import { ContactButton } from "@/features/portfolio/components/contact-button";
import {
    FeaturesItem,
    FeaturesList,
} from "@/features/portfolio/components/features";
import type { Project } from "@/features/portfolio/data/projects";

function ProjectList({ items }: { items: Project[] }) {
    return (
        <FeaturesList>
            {items.map((item) => (
                <Modal key={item.title}>
                    <ModalTrigger asChild>
                        <FeaturesItem
                            title={item.title}
                            description={item.description}
                        />
                    </ModalTrigger>

                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>
                                {item.modal?.title || item.title}
                            </ModalTitle>
                            <ModalDescription>
                                {item.modal?.description || item.description}
                            </ModalDescription>

                            <div className="bg-primary/7 rounded-(--rounded) p-(--p) [--p:--spacing(1.5)] [--rounded:var(--radius-2xl)]">
                                <div className="relative aspect-[16/7] max-h-[198px] w-full">
                                    <Image
                                        src={item.image}
                                        alt="project-image"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="size-full rounded-[calc(var(--rounded)-var(--p))] object-cover object-top"
                                    />
                                </div>
                            </div>
                        </ModalHeader>

                        <ModalBody className="pt-0 pb-3 sm:pb-0">
                            {item.links.length > 0 && (
                                <div className="flex items-center gap-3">
                                    {item.links.map((link) => (
                                        <ContactButton
                                            key={link.url}
                                            icon={link.icon}
                                            url={link.url}
                                            label={link.label}
                                            alt={link.alt}
                                            variant="outline"
                                        />
                                    ))}
                                </div>
                            )}
                        </ModalBody>

                        <ScrollArea>
                            <ModalBody className="max-h-[calc(80dvh-300px-48px-68px-2rem)] pt-0 sm:max-h-[calc(80dvh-300px-48px-68px)]">
                                <p className="text-justify">{item.about}</p>
                            </ModalBody>
                        </ScrollArea>

                        <ModalFooter>
                            <ModalCancel>Close</ModalCancel>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ))}
        </FeaturesList>
    );
}

export { ProjectList };
