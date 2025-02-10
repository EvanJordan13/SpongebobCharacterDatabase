import Provider from "./provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <body>
          <Provider>{children}</Provider>
        </body>
      </head>
    </html>
  );
}
