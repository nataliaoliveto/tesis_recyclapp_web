import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <div className="h-full overflow-hidden" id={id}>
      <div className={cn("h-full bg-center bg-cover", className)}>
        <div className="px-4 md:px-8 py-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};
