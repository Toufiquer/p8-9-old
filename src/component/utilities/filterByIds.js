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

export default filterByIds;
