const findIndex = (type, list) => {
  return list.findIndex((list) => {
    return list.type === type;
  });
};

export default findIndex;
