import { Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PlaceDetailPage from "./pages/PlaceDetailPage";
import BookmarkPage from "./pages/BookmarkPage";
import SearchResult from "./pages/SearchResult";
import UserSettingPage from "./pages/UserSettingPage";
import CampusContext from "./CampusContext";
import AdminDashboardPage from "./pages/AdminDashboardPage";

function App() {
  const [dropdownState, setDropdownState] = useState(false);
  const { campus } = useContext(CampusContext);

  function handleDropdown(e) {
    e.stopPropagation();
    setDropdownState(!dropdownState);
  }

  return (
    <div onClick={() => setDropdownState(false)}>
      <Navbar dropdownState={dropdownState} handleDropdown={handleDropdown} />
      <ScrollToTop />
      <div className="sm:pt-[100px] pt-[68px] px-16">
        <Routes>
          <Route exact path="/" element={<LandingPage campus={campus} />} />
          <Route exact path="/place-detail/:id" element={<PlaceDetailPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/bookmark" element={<BookmarkPage />} />
          <Route
            path={`/tempat-makan/campus/${campus}`}
            element={<SearchResult />}
          />
          <Route exact path="/user/setting" element={<UserSettingPage />} />
          <Route
            exact
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
