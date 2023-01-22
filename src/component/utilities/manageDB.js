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
// Users Save To Database
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
// Products Save To Database
const saveProduct = (id) => {
  const storedCard = getItem("ProductsData");
  if (storedCard[id]) {
    storedCard[id] += 1;
  } else {
    storedCard[id] = 1;
  }
  savaDataToDB("ProductsData", storedCard);
};
const removeProduct = (id) => {
  const storedCard = getItem("ProductsData");
  if (storedCard[id]) {
    delete storedCard[id];
  }
  savaDataToDB("ProductsData", storedCard);
};
const decreaseProduct = (id) => {
  const storedCard = getItem("ProductsData");
  if (storedCard[id] === 1) {
    delete storedCard[id];
  } else if (storedCard[id]) {
    storedCard[id] -= 1;
  }
  savaDataToDB("ProductsData", storedCard);
};

export { getItem, saveUser, removeUser, saveProduct, removeProduct, decreaseProduct };
