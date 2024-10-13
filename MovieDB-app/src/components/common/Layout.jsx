const Layout = (props) => {
    const { children } = props;
  
    return (
      <div className="h-full px">
        {children}
      </div>
    );s
  };
  
  export default Layout;

//   style={{
//     padding: "0 8em",
//     margin: "auto",
//     width: "100%",
//   }}