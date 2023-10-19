import { useRef, useEffect, useState } from 'react';

const useElementHeight = <T extends HTMLElement = HTMLDivElement>(): [React.RefObject<T>, number] => {
    const elementRef = useRef<T | null>(null);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const element = elementRef.current
        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                setHeight(entry.contentRect.height);
            });
        });

        if (element) {
            resizeObserver.observe(element);
        }

        return () => {
            if (resizeObserver && element) {
                resizeObserver.unobserve(element);
            }
        }
    }, []);

    return [elementRef, height];
}

export default useElementHeight
