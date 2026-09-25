import "./App.css";
import { Header } from "./components/common/main-components";
import { MainContent } from "./components/common/main-components";
import { ProductSection } from "./components/common/main-components";
import { Footer } from "./components/common/main-components";
import { FAQ } from "./components/common/main-components";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </Provider>
  );
}

export default App;
