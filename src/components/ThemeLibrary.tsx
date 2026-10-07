import { Link } from "@tanstack/react-router";
import { themes } from "@/data/library";

export function ThemeLibrary() {
  return (
    <section id="themas" className="relative bg-gradient-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-baloo text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Kies jouw thema
          </h2>
          <p className="mt-4 font-nunito text-base text-muted-foreground sm:text-lg">
            Kies een wereld.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t) => (
            <Link
              key={t.slug}
              to="/thema/$slug"
              params={{ slug: t.slug }}
              className={
                "group rounded-3xl border border-border/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-magic " +
                t.bg
              }
            >
              {t.image ? (
                <img
                  src={t.image}
                  alt={`${t.title} — interactieve speelboeken`}
                  loading="lazy"
                  className="w-full rounded-2xl object-contain shadow-soft transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-3xl shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  aria-hidden="true"
                >
                  {t.emoji}
                </span>
              )}

              <h3 className="mt-6 font-baloo text-2xl font-extrabold text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 font-nunito text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>
              <span className="mt-4 inline-block font-nunito text-sm font-bold text-primary">
                Bekijk thema →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
