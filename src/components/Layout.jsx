import classes from "../components/Layout.module.scss"
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className={classes.main_container}>{children}</main>
      <Footer />
    </section>
  );
};
