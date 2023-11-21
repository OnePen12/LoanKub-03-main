import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PayOffDebt1 from "./pages/PayOffDebt1";
import PayOffDebt2 from "./pages/PayOffDebt2";
import LoanHistory from "./pages/LoanHistory";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pay-off-debt-2":
        title = "";
        metaDescription = "";
        break;
      case "/loan-history":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PayOffDebt1 />} />
      <Route path="/pay-off-debt-2" element={<PayOffDebt2 />} />
      <Route path="/loan-history" element={<LoanHistory />} />
    </Routes>
  );
}
export default App;
