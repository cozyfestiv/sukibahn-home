import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./Routes";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export function Layout() {
  return (
    <Router>
      <>
        <Header />
        <RoutesComponent />
        <Footer />
      </>
    </Router>
  );
}
