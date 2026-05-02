import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "about";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 160) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[min(96%,860px)]" : "w-[min(96%,720px)]"
      }`}
    >
      <nav className="glass-strong flex items-center justify-between rounded-full px-3 py-2 sm:px-5">
        <a href="#about" className="flex items-center gap-2 px-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 text-sm font-bold text-primary glow-ring">
            N
          </span>
          <span className="hidden font-display text-sm sm:inline">Nikhitha</span>
        </a>
        <ul className="flex items-center gap-0.5 text-xs sm:text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-2.5 py-1.5 transition-colors sm:px-3.5 ${
                  active === l.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary/90 shadow-[0_0_20px_-2px_hsl(175_80%_55%/0.7)]" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
