import { ReactElement } from "react";

interface SectionProps {
    id: string;
    children: ReactElement;
}
export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="w-full flex items-center justify-center flex-wrap my-20 text-center">
        {children}
    </section>
  )
}
