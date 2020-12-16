import { Local as data } from "@/api/Local";

export const stock = {
  getDaily: () => {
    return data.getDaily();
  }
};
