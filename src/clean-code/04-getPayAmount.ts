const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}) => {
  let result;
  if (isDead) {
    result = 1500;
  } else {
    if (isSeparated) {
      result = 2500;
    } else {
      if (isRetired) {
        result = 3000;
      } else {
        result = 4000;
      }
    }
  }

  return result;
};

//Refactorizando la función:
const getPayAmount1 = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}): number => {
  if (isDead) return 1500;

  if (isSeparated) return 2500;

  return isRetired ? 3000 : 4000;
};
