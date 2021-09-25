import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className={`flex flex-col min-h-screen h-screen"`}>
      <div className="z-50">
        <Navbar />
      </div>
      <div className="flex justify-center flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Frewquent Beauty",
  description: "A skincare website",
  keywords: `skincare, beauty, products`,
};
