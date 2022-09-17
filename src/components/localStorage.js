export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.getItem("FavoritesList", serialState);
    // console.log(serialState);
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return err;
  }
};

// export default Favarray;

export const loadState = () => {
  // const FavToStorage = {
  //   Favarray: [
  //     {
  //       id: "2022-09-17T17:17:44.240Z",
  //       item: "Guadeloupe",
  //       favorite: true,
  //     },
  //     {
  //       id: "2022-09-17T17:17:47.599Z",
  //       item: "Mali",
  //       favorite: true,
  //     },
  //     {
  //       id: "2022-09-17T17:17:51.447Z",
  //       item: "Saint Helena, Ascension and Tristan da Cunha",
  //       favorite: "",
  //     },
  //   ],
  // };
  //   console.log(FavToStorage);
  try {
    const serialState = localStorage.getItem("FavoritesList");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};
