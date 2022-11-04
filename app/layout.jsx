//import
import Navbar from "./components/Navbar/Navbar";
import globals from "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head> </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
