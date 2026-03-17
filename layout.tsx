import { I18nProvider } from "@/i18n";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = "en";

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
