import { Footer, Header } from "../components";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
