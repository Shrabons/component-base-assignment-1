import Student from "./components/allStudent/Student";
import Hero from "./components/hero/Hero";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Student />
      <Footer />
    </>
  );
}
