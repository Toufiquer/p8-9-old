const findChartDataById = (id, data) => {
  for (let curr in data) {
    const currId = data[curr][0].id;
    if (currId === +id) {
      return data[curr];
    }
  }
};
export { findChartDataById };
