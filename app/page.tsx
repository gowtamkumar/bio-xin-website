import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import DrLightUvMirror from "@/components/smart-live-style/DrLightUvMirror";

export default async function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <DrLightUvMirror />
      </main>
      <Footer />
    </>
  );
}
