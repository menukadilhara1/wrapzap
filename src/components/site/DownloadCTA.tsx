export function DownloadCTA() {
  return (
    <section id="download" className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 lg:p-16">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-[400px] rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 size-[400px] rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="mt-6 text-4xl lg:text-6xl font-extrabold tracking-[-0.03em] text-balance leading-[0.95]">
              Download WrapZapEats.
              <br />
              <span className="text-background/60">Eat like an athlete.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
            <a
              href="#"
              className="flex items-center gap-3 bg-background text-foreground px-6 py-4 rounded-2xl hover:bg-secondary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.46 1.58-1.5 3.12-.85 1.32-1.748 2.62-3.146 2.65-1.39.03-1.84-.82-3.43-.82-1.6 0-2.09.79-3.4.85-1.36.05-2.39-1.42-3.26-2.74-1.78-2.6-3.16-7.36-1.31-10.59.92-1.6 2.56-2.62 4.34-2.65 1.34-.03 2.61.91 3.42.91.81 0 2.36-1.12 3.98-.95.68.03 2.59.27 3.81 2.06-.1.06-2.28 1.34-2.25 4 .03 3.18 2.79 4.24 2.83 4.26z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                  Download on the
                </span>
                <span className="text-base font-bold">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-background text-foreground px-6 py-4 rounded-2xl hover:bg-secondary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
                <path
                  fill="currentColor"
                  d="M3.6 1.84a1.5 1.5 0 0 0-.6 1.2v17.92a1.5 1.5 0 0 0 .6 1.2l10.2-10.16L3.6 1.84zm11.46 9.4 2.69-2.68-9.6-5.45 6.91 8.13zm0 1.52-6.91 8.13 9.6-5.45-2.69-2.68zm5.94-3.4-2.66-1.51-3.05 3.04 3.05 3.04 2.7-1.53a1.7 1.7 0 0 0 0-3.04z"
                />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                  Get it on
                </span>
                <span className="text-base font-bold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
