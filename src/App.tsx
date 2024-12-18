import Footer from "@/components/ApplicationShell/Footer";
import Nav from "@/components/ApplicationShell/Nav";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useCryptoData } from "@/hooks/useCryptoData";
import Cryptos from "@/pages/CryptosPage";
import Portfolio from "@/pages/PortfolioPage";
import Widgets from "@/pages/WidgetsPage";
import "@/styles/App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  const { cryptos, globalData, trending, cryptoList } = useCryptoData();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Nav globalData={globalData} cryptoList={cryptoList} />

        <Routes>
          <Route path="/" element={<Cryptos cryptos={cryptos} />} />
          <Route path="/portfolio" element={<Portfolio cryptos={cryptos} />} />
          <Route
            path="/widgets"
            element={
              <Widgets
                cryptos={cryptos}
                globalData={globalData}
                trending={trending}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
