import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, Box, Button, DropButton, Nav, ResponsiveContext, Text } from "grommet";
import { HelpOption, HomeRounded, Favorite } from "grommet-icons";
import { UserContext } from "./UserContext";
import { useSelector } from "react-redux";

export const HeaderNav = () => {
  // console.log(favnav);
  const Favarray = useSelector((state) => state.favorites.favlist);
  const favnum = Favarray.length;

  const size = useContext(ResponsiveContext);
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  const navigateFavorites = () => {
    navigate("/favorites");
  };

  return user ? (
    <Nav align="center" direction="row" gap="small">
      {!["xsmall", "small"].includes(size) && (
        <>
          <Button icon={<HelpOption />} a11yTitle="Help" title="Help" onClick={navigateDashboard} />
          <Button icon={<HomeRounded />} a11yTitle="Home" title="Home" onClick={navigateHome} />
          <Button icon={<Favorite />} a11yTitle="Home" title="Home" onClick={navigateFavorites} label={favnum} />
        </>
      )}
      <DropButton
        dropContent={<UserDetails />}
        dropProps={{ align: { top: "bottom", right: "right" } }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {!user.image ? (
          <Avatar background="blue!" flex={false}>
            <Text size="large" color="text-strong">
              JD
            </Text>
          </Avatar>
        ) : (
          <Avatar src={user.image} />
        )}
      </DropButton>
    </Nav>
  ) : null;
};

const UserDetails = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <Box width="medium">
      <Box pad="medium" direction="row" gap="small">
        {user && !user.image ? (
          <Avatar background="blue!" flex={false} size="large">
            <Text size="xlarge" color="text-strong">
              VD
            </Text>
          </Avatar>
        ) : (
          <Avatar src={user.image} size="large" />
        )}
        <Box pad={{ vertical: "small" }}>
          <Text color="text-strong" size="large" weight="bold">
            {`${user.firstName} ${user.lastName}`}
          </Text>
          <Text size="small">{user.email}</Text>
        </Box>
      </Box>
      <Box
        border={{
          side: "top",
          color: "border-weak",
        }}
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "xsmall", vertical: "small" }}
      >
        <Button label="My Profile" />
        <Button label="Sign Out" onClick={() => setUser()} />
      </Box>
    </Box>
  );
};
