import { daily } from "@/data/daily";
import { weekly } from "@/data/weekly";
import { montly } from "@/data/montly";

const data = {
  daily,
  weekly,
  montly
};

export const Local = {
  getData: typeDate => {
    return data[typeDate];
  }
};
