import { StyledApp } from "page/app/app.styled";
import Header from "components/header";
import MainSection from "components/mainSection";
import Footer from "components/footer";

function App() {
  return (
    <StyledApp>
      <Header />
      <MainSection />
      <Footer />
    </StyledApp>
  );
}

export default App;
