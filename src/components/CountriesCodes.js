import { useEffect, useState } from "react";
import { CircleInformation, StatusWarning } from "grommet-icons";
import { Measure } from "./Measure";
import { StatusBar } from "./StatusBar";

const MOCK_DATA = require("../components/dashboard/servers.json");

// const CODES_MAP = {
//   CCA2: {
//     label: "CCA2",
//     icon: <CircleInformation />,
//     value: { cca2 },
//   },
//   CCN3: {
//     label: "CCN3",
//     icon: <StatusWarning />,
//   },
//   CCA3: {
//     label: "CCA3",
//     icon: <CircleInformation />,
//   },
// };

export const CountriesCodes = (cca2, cca3, ccn3) => {
  const data = MOCK_DATA["serverState-counts"].counts;
  const [connectionStatus, setConnectionStatus] = useState(undefined);

  const CODES_MAP = {
    CCA2: {
      label: "CCA2",
      icon: <CircleInformation />,
      value: { cca2 },
    },
    CCN3: {
      label: "CCN3",
      icon: <StatusWarning />,
      value: { ccn3 },
    },
    CCA3: {
      label: "CCA3",
      icon: <CircleInformation />,
      value: { cca3 },
    },
  };

  useEffect(() => {
    const nextStatus = { ...CODES_MAP };
    Object.keys(nextStatus).forEach((key) => {
      // nextStatus[key].count = data[key];
      nextStatus[key].count = CODES_MAP[key];
    });
    setConnectionStatus(nextStatus);
  }, [data]);

  return (
    <StatusBar
      background="background-front"
      title="Countries Codes"
      menuItems={[
        { label: "Move", onClick: () => {} },
        { label: "Share", onClick: () => {} },
      ]}
    >
      {CODES_MAP.map((cod) => (
        <Measure key={CODES_MAP.indexOf(cod)} data={cod} {...cod} />
      ))}
    </StatusBar>
  );
};
