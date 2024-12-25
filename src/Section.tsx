import { useEffect, useRef } from "react";
type sectionProps = {
    id: string;
    setTab: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
};

const Section = ({ id, setTab, children }: sectionProps) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTab(id); // Update tab state when the section comes into view
                }
            },
            {
                threshold: 0.25, // 50% of the section should be in view
            }
        );

        // Start observing this section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [id, setTab]);

    return (
        <section
            id={id}
            ref={sectionRef}
            className="flex flex-col  gap-8 px-8  items-center mt-24 max-lg:mt-16 scroll-m-24"
        >
            {children}
        </section>
    );
};

export default Section;
