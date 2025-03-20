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
                        </ModalHeader>

                        <ModalBody>
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
                            <p className="text-justify">{item.about}</p>
                        </ModalBody>

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
