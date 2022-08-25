import { React, useState } from "react";
import { Link } from "react-router-dom";
// import { Box, Grommet } from "grommet";
// import { Box, Button, Heading, Grommet } from "grommet";
import { Box, Button, Collapsible, Heading, ResponsiveContext, Layer } from "grommet";
import { FormClose, Notification } from "grommet-icons";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const AppBar = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <>
      {/* <div className="homeMain">
        <div className="homeNav"> */}

      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                My App
              </Heading>

              <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>
            {/* <Link to="/">
              <div>HOME</div>
            </Link>
            <Link to="/countries">
              <div>COUNTRIES</div>
            </Link> */}

            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <Link to="/">
                  <div>HOME</div>
                </Link>
                <Link to="/countries">
                  <div>COUNTRIES</div>
                </Link>
              </Box>

              {/* {size !== "small" && ( */}
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box flex width="medium" background="light-3" elevation="small" align="center" justify="center">
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  {" "}
                  <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                    <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
                  </Box>
                  <Box fill background="light-2" align="center" justify="center">
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </>
  );
};

export default Home;
