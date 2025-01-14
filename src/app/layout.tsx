import './globals.css';
import Navbar from './components/Navbar'; // Updated import path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow mt-8">
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-gray-600">&copy; 2024 Linawear. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}