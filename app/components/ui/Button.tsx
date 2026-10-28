type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
};

const variants = {
  primary: "bg-ink text-white border-ink hover:bg-ink/85",
  secondary: "bg-white text-ink border-ink hover:bg-surface",
  inverted: "bg-white text-ink border-white hover:bg-white/90",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg border px-[22px] py-[13px] text-base font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
