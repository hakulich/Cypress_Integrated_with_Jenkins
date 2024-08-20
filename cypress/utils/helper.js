import Chance from "chance";

export const getRandomString = (length) => {
  return Chance().string({ length: 5 });
};

export const getRandomEmail = () => {
  return Chance().email();
};
