import { StyledApp, Indent } from "pages/app/app.styled";
import Header from "components/header";
import Footer from "components/footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import AboutPage from "pages/aboutPage";
import ContactPage from "pages/contactPage";
import ProjectsPage from "pages/projectsPage";
import DocsPage from "pages/docsPage";
import NotFoundPage from "pages/notFoundPage";
import { useState, useEffect } from "react";

function App() {
  const [headerTransform, setHeaderTransform] = useState("none");

  useEffect(() => {
    var lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      // down
      if (currentScroll > lastScroll) {
        setHeaderTransform("translate(0px, -100%)");
        // up
      } else if (currentScroll < lastScroll) {
        setHeaderTransform("none");
      }

      lastScroll = currentScroll;
    });
  }, []);

  return (
    <StyledApp>
      <Header headerTransform={headerTransform} />

      <Indent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </StyledApp>
  );
}

export default App;
