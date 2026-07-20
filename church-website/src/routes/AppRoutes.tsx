import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Sermons from "../pages/Sermons/Sermons";
import DailyBread from "../pages/DailyBread/DailyBread";
import Leadership from "../pages/Leadership/Leadership";
import Departments from "../pages/Departments/Departments";
import ChurchProjects from "../pages/ChurchProjects/ChurchProjects";
import Children from "../pages/Children/Children";
import MemberRegistration from "../pages/MemberRegistration/MemberRegistration";
import SocialMedia from "../pages/SocialMedia/SocialMedia";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} /> 

        <Route path="/sermons" element={<Sermons />} />

        <Route path="/daily-bread" element={<DailyBread />} />

        <Route path="/leadership" element={<Leadership />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/projects" element={<ChurchProjects />} />

        <Route path="/children" element={<Children />} />

        <Route
          path="/member-registration"
          element={<MemberRegistration />}
        />

        <Route path="/social-media" element={<SocialMedia />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;