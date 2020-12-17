import { Local as data } from "@/api/Local";

export const stock = {
  getData: typeDate => {
    return data.getData(typeDate);
  }
};
