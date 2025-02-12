import Features from "./components/features";
import Footer from "./components/footer";
import { Services } from "./components/services";
//import Grid from "./components/grid";
import Hero from "./components/ui/hero";
import Stack from "./components/stack";
import { FloatingNav } from "./components/ui/navbar-menu";
import { navItems } from "./data";


export default function Home() {
  return (
    <main className="relative flex bg-black justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Features />
        <Services />
        <Stack />
        <Footer />
      </div>
    </main>
  );
}
