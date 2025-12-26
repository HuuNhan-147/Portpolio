import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MouseFollower from "../components/MouseFollower";
import BackgroundMusic from "../components/BackgroundMusic";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MouseFollower />
      <BackgroundMusic />
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Thay children bằng Outlet */}
      </main>
      <Footer />
    </div>
  );
}