import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-base-200">
        <Header />

        <Toaster position="top-center" />
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
