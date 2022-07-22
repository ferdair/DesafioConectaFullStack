import Navigations from "./Navigations";

const Layout = ({ children }) => {
  return (
    <>
      <Navigations />
      <main>{children}</main>
    </>
  );
};

export default Layout;
