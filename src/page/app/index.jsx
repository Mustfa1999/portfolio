import { StyledApp } from "page/app/app.styled";
import Header from "components/header";
import MainSectionWrapper from "components/mainSection";
import Footer from "components/footer";

function App() {
  return (
    <StyledApp>
      <Header />
      <MainSectionWrapper />
      <Footer />
    </StyledApp>
  );
}

export default App;
