const filterByIds = (ids, users) => {
  const allUsers = [];
  for (let storedId in ids) {
    const user = users.find((curr) => curr.id === +storedId);
    if (user) {
      allUsers.push(user);
    }
  }
  return allUsers;
};
const filterProductsByIds = (ids, products) => {
  const allProducts = [];
  for (let storedId in ids) {
    const product = products.find((curr) => curr.id === storedId);
    if (product) {
      product.quantity = ids[storedId];
      allProducts.push(product);
    }
  }
  return allProducts;
};

export { filterByIds, filterProductsByIds };
