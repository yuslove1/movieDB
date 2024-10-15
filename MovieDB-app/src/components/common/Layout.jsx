const Layout = (props) => {
    const { children } = props;
  
    return (
      <div className="">
        {children}
      </div>
    );
  };
  
  export default Layout;

//   style={{
//     padding: "0 8em",
//     margin: "auto",
//     width: "100%",
//   }}