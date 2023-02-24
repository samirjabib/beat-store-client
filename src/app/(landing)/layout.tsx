import { Header } from "../components";
import { Footer } from "../components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="mt-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
