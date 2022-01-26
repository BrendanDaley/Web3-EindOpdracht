export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Fout in het ophalen van de state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (err) {
    console.log("Fout bij het opslaan in de localstorage");
  }
};
