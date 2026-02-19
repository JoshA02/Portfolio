'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-dark/30">
      <div className="flex lg:px-30 pb-35 md:pb-6 pt-6 md:px-12 px-4 justify-center font-body">
        <div className="flex-1 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          <p className="text-card-fg text-sm">
            © {currentYear} Josh Aaron
          </p>

          <p className="text-card-fg text-sm">
            Reach out at{' '}
            <a 
              href="mailto:hello@joshaaron.me" 
              className="text-accent hover:text-accent/80 transition-colors"
            >
              hello@joshaaron.me
            </a>
          </p>

          <p className="text-card-fg/60 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
