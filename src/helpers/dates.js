const compareDate = (a, b) => {
  const bandA = a.Date.toUpperCase();
  const bandB = b.Date.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
};

export { compareDate };
