"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

import { buttonVariants } from "@/components/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { PrimitiveProps } from "@/types/dom";
import { cn } from "@/utils/classname";

interface ModalContextContract {
    open: boolean;
    onOpenChange?: (value: boolean) => void;
    isMobile: boolean;
}
const ModalContext = createContext<ModalContextContract | null>(null);
function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within Modal");
    }

    return context;
}
function useModalSafe() {
    return useContext(ModalContext);
}

interface ModalProps {
    open?: boolean;
    onOpenChange?: (value: boolean) => void;
    children?: ReactNode;
}
function Modal({ open, onOpenChange, children }: ModalProps) {
    const [fallbackOpen, onFallbackOpenChange] = useState(false);
    const isMobile = !!useMediaQuery(`(max-width: 639px)`);

    const _open = open === undefined ? fallbackOpen : open;
    const _onOpenChange =
        open === undefined ? onFallbackOpenChange : onOpenChange;

    const Elem = isMobile ? Drawer : Dialog;

    return (
        <ModalContext
            value={{ isMobile, open: _open, onOpenChange: _onOpenChange }}
        >
            <Elem open={_open} onOpenChange={_onOpenChange} data-slot="modal">
                {children}
            </Elem>
        </ModalContext>
    );
}

function ModalTrigger(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerTrigger : DialogTrigger;

    return <Elem data-slot="modal-trigger" {...props} />;
}

function ModalContent(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerContent : DialogContent;

    return <Elem data-slot="modal-content" {...props} />;
}

function ModalHeader(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerHeader : DialogHeader;

    return <Elem data-slot="modal-header" {...props} />;
}

function ModalTitle(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerTitle : DialogTitle;

    return <Elem data-slot="modal-title" {...props} />;
}

function ModalDescription(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerDescription : DialogDescription;

    return <Elem data-slot="modal-description" {...props} />;
}

function ModalBody({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="modal-body"
            className={cn("px-4 pt-4 sm:px-0 sm:pt-0", className)}
            {...props}
        />
    );
}

function ModalFooter(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerFooter : DialogFooter;

    return <Elem data-slot="modal-footer" {...props} />;
}

function ModalClose(props: PrimitiveProps) {
    const { isMobile } = useModal();

    const Elem = isMobile ? DrawerClose : DialogClose;

    return <Elem data-slot="modal-close" {...props} />;
}

function ModalCancel(props: React.ComponentProps<typeof ModalClose>) {
    return (
        <ModalClose
            className={buttonVariants({ variant: "ghost" })}
            {...props}
        />
    );
}

export {
    Modal,
    ModalBody,
    ModalCancel,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTrigger,
    useModal,
    useModalSafe,
};
