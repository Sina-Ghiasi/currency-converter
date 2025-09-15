import { BadgeDollarSign } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md justify-center">
        <BadgeDollarSign className="w-5 h-5" />
        <span className="text-xl p-2">مبدل ارز</span>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">سلام دنیا 🌍</h2>
          <p className="text-gray-500">یک تست ساده با DaisyUI</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>© 2025 ساخته شده با React + Tailwind + DaisyUI</p>
      </footer>
    </div>
  );
}

export default App;
