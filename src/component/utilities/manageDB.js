const getItem = (name) => {
  let stored = localStorage.getItem(name);
  if (stored) {
    const data = JSON.parse(stored);
    return data;
  } else {
    return (stored = {});
  }
};
const savaDataToDB = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
const saveUser = (id) => {
  const storedCard = getItem("UsersData");
  if (!storedCard[id]) {
    storedCard[id] = 1;
  }
  savaDataToDB("UsersData", storedCard);
};
const removeUser = (id) => {
  const storedCard = getItem("UsersData");
  if (storedCard[id]) {
    delete storedCard[id];
  }
  savaDataToDB("UsersData", storedCard);
};

export { getItem, saveUser, removeUser };
