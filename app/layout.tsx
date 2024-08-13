import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars",
  description: "Fan page",
};

const getApiData = async () => {
  const promises = ["people", "planets", "species"].map((group) =>
    fetch(`https://swapi.info/api/${group}`)
  );

  return Promise.all(promises).then(async (res) => {
    const [people, planets, species] = await Promise.all(
      res.map((res) => res.json())
    );

    return { people, planets, species };
  });
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getApiData();

  return (
    <html lang="en" className="dark text-foreground">
      <body className={inter.className}>
        <Providers apiData={data}>{children}</Providers>
      </body>
    </html>
  );
}
