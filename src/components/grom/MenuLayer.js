import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, Header, Footer, Layer, Nav, ResponsiveContext, Text } from "grommet";
import { Aruba, FormClose, Menu } from "grommet-icons";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// const navigateHome = () => {
//   navigate("/");
// };

export const MenuLayer = () => {
  const size = useContext(ResponsiveContext);
  const [showLayer, setShowLayer] = useState(false);
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };
  const pad = {
    horizontal: "medium",
    vertical: "small",
  };
  return (
    <>
      <Button icon={<Menu />} onClick={() => setShowLayer(true)} />
      {showLayer && (
        <Layer
          full={!["xsmall", "small"].includes(size) ? "vertical" : true}
          modal={false}
          onClickOutside={() => setShowLayer(false)}
          onEsc={() => setShowLayer(false)}
          position={!["xsmall", "small"].includes(size) ? "left" : undefined}
        >
          <Box fill="vertical" width={!["xsmall", "small"].includes(size) ? "medium" : undefined} elevation="large">
            <Header pad={pad}>
              <Button
                a11yTitle={`You are in a navigation layer. To close this layer, 
                press Enter`}
                icon={<FormClose />}
                onClick={() => setShowLayer(false)}
                autoFocus
              />
            </Header>
            <Box pad={pad} flex gap="medium" overflow="auto">
              <SidebarHeader />
              <SidebarNav />
              <Box flex />
              <SidebarFooter />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

const SidebarHeader = () => (
  <Box align="start" border={{ color: "border-weak", side: "bottom" }} pad={{ top: "small", bottom: "medium" }} gap="medium" flex={false}>
    <Box gap="xsmall">
      <Avatar background="status-unknown" flex={false} margin={{ bottom: "xsmall" }}>
        <Text size="large">V D</Text>
      </Avatar>
      <Text color="text-strong" weight="bold">
        BC Helsinki React222K
      </Text>
      <Text size="small">ID: S2200119</Text>
    </Box>
    <Button label="Switch Account" secondary />
  </Box>
);

const SidebarNav = () => (
  <Nav a11yTitle="Sidebar Navigation">
    <NavButton label="Home" navigate="/" />
    <NavButton label="My Apps" navigate="google.com" />
    <NavButton label="App Catalog" />
    <NavButton label="Manage" />
  </Nav>
);

const NavButton = ({ label, navigate }) => (
  <Button onClick={navigate}>
    <Text color="text-strong">{label}</Text>
  </Button>
);

NavButton.propTypes = {
  label: PropTypes.string,
};

const SidebarFooter = () => (
  <Footer pad={{ bottom: "small" }}>
    <Box fill="horizontal" gap="medium">
      <Box border={{ side: "bottom" }} pad={{ bottom: "xsmall" }}>
        <Text size="xsmall">Last Visited</Text>
      </Box>
      <Button>
        <Box direction="row" gap="small">
          <Box background="orange!" pad="small" round="small">
            <Aruba color="background" />
          </Box>
          <Box>
            <Text weight="bold" color="text-strong" size="xsmall">
              React advanced course
            </Text>
            <Text size="xsmall">BC Helsinki</Text>
          </Box>
        </Box>
      </Button>
    </Box>
  </Footer>
);
