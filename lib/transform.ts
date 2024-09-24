/* eslint-disable @typescript-eslint/no-explicit-any */
export const replaceMongoIdInArray = (array: any[]) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};
