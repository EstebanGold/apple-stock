import { daily } from "@/data/daily";
import { weekly } from "@/data/weekly";
import { montly } from "@/data/montly";

export const Local = {
  getDaily: () => {
    return daily;
  },
  getWeekly: () => {
    return weekly;
  },
  getMontly: () => {
    return montly;
  }
};
