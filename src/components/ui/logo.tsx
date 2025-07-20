import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 text-xl",
    md: "h-12 w-12 text-2xl",
    lg: "h-16 w-16 text-4xl",
    xl: "h-24 w-24 text-6xl"
  };

  return (
    <div className={cn(
      "flex items-center gap-2",
      className
    )}>
      <div className={cn(
        "relative flex items-center justify-center rounded-lg bg-gradient-primary shadow-gaming animate-glow-pulse",
        sizeClasses[size]
      )}>
        <span className="font-gaming font-bold text-primary-foreground">🎮</span>
      </div>
      <div className="flex flex-col">
        <span className={cn(
          "font-gaming font-bold bg-gradient-gaming bg-clip-text text-transparent leading-none",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-2xl",
          size === "xl" && "text-4xl"
        )}>
          NGameHut
        </span>
        {size !== "sm" && (
          <span className="text-xs text-gaming-gold font-bold opacity-80">
            NAIJA GAMING
          </span>
        )}
      </div>
    </div>
  );
};

export { Logo };