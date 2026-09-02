import { useEffect, useState } from "react";
import { menuCategories } from "@/config/menu";

export function CategoryBar() {
  const [active, setActive] = useState<string>(menuCategories[0]?.id ?? "");

  useEffect(() => {
    const sections = menuCategories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[4.25rem] z-40 border-y border-border bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-8">
        <nav className="flex gap-1 overflow-x-auto py-2 [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`shrink-0 rounded-xs px-5 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                active === cat.id
                  ? "bg-crimson text-crimson-foreground"
                  : "text-muted-foreground hover:text-gold"
              }`}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
