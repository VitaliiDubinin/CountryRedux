import React, { useContext, useMemo, useState } from "react";
import { Box, Button, ResponsiveContext, Text } from "grommet";
import { AppIdentity } from "./AppIdentity";
import { HeaderNav } from "./HeaderNav";
import { UserContext } from "./UserContext";
import { defaultUser } from "./UserContext";

export const DemoPageContent = () => {
  //   const [user, setUser] = useState(defaultUser);

  const { setUser } = useContext(UserContext);
  //   const contextValue = useMemo(
  //     () => ({
  //       user,
  //       setUser,
  //     }),
  //     [user]
  //   );

  return (
    <Box align="center" gap="small">
      <Text>This button is for demo purposes only.</Text>
      <Button label="Sign In" primary onClick={() => setUser(defaultUser)} />
    </Box>
  );
};

// export default DemoPageContent;
