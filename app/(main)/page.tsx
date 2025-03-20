import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/button";
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
import {
    ContactButton,
    Features,
    FeaturesItem,
    FeaturesList,
    FeaturesTitle,
    Timeline,
    TimelineDetail,
    TimelineItem,
    TimelineTitle,
} from "@/features/portfolio/components";
import { projects } from "@/features/portfolio/data/projects";

function IndexPage() {
    return (
        <>
            <p className="text-on-muted text-lg" data-slot="bio">
                Hello, world! I am Lewin, a passionate and curious individual
                who loves learning new things. I enjoy web development and
                creating innovative, functional digital experiences while
                continuously improving my skills.
            </p>

            <Timeline>
                <TimelineTitle>Education</TimelineTitle>

                <TimelineItem>
                    <TimelineDetail>Diponegoro University</TimelineDetail>
                    <TimelineDetail variant="description">
                        2019 - 2023
                    </TimelineDetail>
                    <TimelineDetail variant="description">
                        Bachelor Degree in Computer Science
                    </TimelineDetail>
                    <TimelineDetail variant="description">
                        Grade 3.65 of 4.00 (Cumlaude)
                    </TimelineDetail>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDetail>
                        Sutomo 1 Private Senior High School
                    </TimelineDetail>
                    <TimelineDetail variant="description">
                        2016 - 2019
                    </TimelineDetail>
                    <TimelineDetail variant="description">
                        Enrolled in Mathematics and Natural Sciences Program
                    </TimelineDetail>
                </TimelineItem>
            </Timeline>

            <Timeline>
                <TimelineTitle>Experience</TimelineTitle>

                <TimelineItem>
                    <TimelineDetail>Kelurahan Negeri Lama</TimelineDetail>
                    <TimelineDetail variant="description">
                        Community Service Program (2022)
                    </TimelineDetail>
                    <TimelineDetail
                        variant="description"
                        className="text-on-muted"
                    >
                        Introducing information and computer technology to
                        elementary school students. Creating and providing
                        pocket books on the introduction of website development
                        and web-based application.
                    </TimelineDetail>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDetail>Eria Private High School</TimelineDetail>
                    <TimelineDetail variant="description">
                        Web Developer -Internship (2022)
                    </TimelineDetail>
                    <TimelineDetail
                        variant="description"
                        className="text-on-muted"
                    >
                        Responsible and play a key role in building web-based
                        application of student report card information systems.
                    </TimelineDetail>
                </TimelineItem>
            </Timeline>

            <Features>
                <FeaturesTitle>Projects</FeaturesTitle>

                <FeaturesList>
                    {projects.map((project) => (
                        <Modal key={project.title}>
                            <ModalTrigger asChild>
                                <FeaturesItem
                                    title={project.title}
                                    description={project.description}
                                />
                            </ModalTrigger>

                            <ModalContent>
                                <ModalHeader>
                                    <ModalTitle>
                                        {project.modal?.title || project.title}
                                    </ModalTitle>
                                    <ModalDescription>
                                        {project.modal?.description ||
                                            project.description}
                                    </ModalDescription>
                                </ModalHeader>

                                <ModalBody>
                                    {project.links.length > 0 && (
                                        <div className="flex items-center gap-3">
                                            {project.links.map((link) => (
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
                                    <p className="text-justify">
                                        {project.about}
                                    </p>
                                </ModalBody>

                                <ModalFooter>
                                    <ModalCancel>Close</ModalCancel>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    ))}
                </FeaturesList>

                <div className="flex justify-end">
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-xs"
                        asChild
                    >
                        <Link href="/projects">
                            Show More
                            <ArrowRightIcon className="size-3.5" />
                        </Link>
                    </Button>
                </div>
            </Features>
        </>
    );
}

export default IndexPage;
