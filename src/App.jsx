import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Solutions from "./components/Solutions/Solutions";
import Industries from "./sections/Industries/Industries";

import Business from "./sections/Business/Business";
import Engineering from "./sections/Engineering/Engineering";
import ProductExplorer from "./sections/ProductExplorer/ProductExplorer";
import Technology from "./sections/Technology/Technology"
import GlobalPresence from "./sections/GlobalPresence/GlobalPresence";

import Metrics from "./sections/Metrics/Metrics";
import News from "./sections/News/News";
import Careers from "./sections/Careers/Careers";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from"./components/Footer/Footer";


function HomePage() {
  return (
    <main>
        <Hero />
         <Industries />

         <Business />

         <Engineering/>

         <ProductExplorer />
        <Technology />
        <GlobalPresence />

        <Metrics />

        <News />
        <Careers/>
        <About />
        <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<main><Solutions /></main>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;