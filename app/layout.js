import "@/styles/globals.css";
import AOSInit from "@/components/AOSinit";
import ScrollSpy from "@/components/ScrollSpy";

export const metadata = {
  title: "Portofolio Indra",
  description: "Frontend Developer Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <AOSInit />
        <ScrollSpy />
        {children}
      </body>
    </html>
  );
}
