export const MyImmutable = {
  List(data) {
    const secondArray = [...data];
    const add = el => secondArray.concat(el);
    const remove = el => secondArray.filter(el);
    const search = el => secondArray.filter(el);
    const update = (index, el) => {
      const uptadedArray = [...secondArray];
      uptadedArray[index] = el(uptadedArray[index]);
      return uptadedArray;
    };
    const toJS = () => [...secondArray];
    return {
      add,
      remove,
      update,
      search,
      toJS,
    };
  },
};

export default (MyImmutable);
