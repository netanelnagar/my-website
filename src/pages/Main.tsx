import { Navigate, Route, Routes } from "react-router";
import Footer from "./Footer";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Main() {
    return (
        <div className="h-full w-full">
            <Routes>
                <Route index element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}
