import { Routes, Route, BrowserRouter } from "react-router";
import { PATH } from "./constants/path";
import { Pages } from "./routing/routes";
import App from "./App";

export const Roots = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH["HOME"]} element={<App />}>
          <Route index element={<Pages.HomePage />} />
          <Route path={PATH["ABOUT US"]} element={<Pages.AboutPage />} />
          <Route path={PATH["SERVICES"]} element={<Pages.ServicesPage />} />
          <Route path={PATH["PORTFOLIO"]} element={<Pages.PortfolioPage />} />
          <Route path={PATH["PAGES"]} element={<Pages.PagesPage />} />
          <Route path={PATH["CONTACT US"]} element={<Pages.ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
