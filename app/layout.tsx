/* eslint-disable */
import { Public_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { headers } from 'next/headers';
import { ThemeProvider } from '@/components/app/theme-provider';
import { ThemeToggle } from '@/components/app/theme-toggle';
import { cn } from '@/lib/shadcn/utils';
import { getAppConfig, getStyles } from '@/lib/utils';
import '@/styles/globals.css';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

const commitMono = localFont({
  display: 'swap',
  variable: '--font-commit-mono',
  src: [
    {
      path: '../fonts/CommitMono-400-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-700-Regular.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/CommitMono-400-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/CommitMono-700-Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);
  const styles = getStyles(appConfig);
  const { pageTitle, pageDescription, companyName, logo, logoDark } = appConfig;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        publicSans.variable,
        commitMono.variable,
        'scroll-smooth font-sans antialiased'
      )}
    >
      <head>
        {styles && <style>{styles}</style>}
        <title>EMB Solar</title>
        <meta name="description" content={pageDescription} />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=""
              className="scale-100 transition-transform duration-300 hover:scale-110"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img src={logo} alt={`${companyName} Logo`} className="block size-6 dark:hidden" /> */}
               <img
                style={{ height: '4em', width: '4em' }}
                src="data:image/jpeg;base64,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"
                alt="Quarkgen Logo"
                className="block size-6"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoDark ?? logo}
                alt={`${companyName} Logo`}
                className="hidden size-6 dark:block"
              />
            </a>
            <span className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
              Built with{' '} QUARKGEN AI
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.livekit.io/agents"
                className="underline underline-offset-4"
              >
                LiveKit Agents
              </a> */}
            </span>
          </header>

          {children}
          <div className="group fixed bottom-0 left-1/2 z-50 mb-2 -translate-x-1/2">
            <ThemeToggle className="translate-y-20 transition-transform delay-150 duration-300 group-hover:translate-y-0" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
