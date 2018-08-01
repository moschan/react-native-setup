export const add = value => {
  return {
    type: 'ADD',
    value,
  };
}

export const remove = value => {
  return {
    type: 'REMOVE',
  };
}
