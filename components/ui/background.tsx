"use client";

export const BackgroundGrid = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Diagonal Stripes Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)",
        }}
      />
      <div className="relative z-40 mx-auto max-w-7xl border-border border-x bg-background">
        {children}
      </div>
    </div>
  );
};
