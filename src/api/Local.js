import { daily } from "@/data/daily";
import { weekly } from "@/data/weekly";
import { montly } from "@/data/montly";

const data = {
  daily,
  weekly,
  montly
};

const URL = "https://raw.githubusercontent.com/EstebanGold/apple-stock/main/src/data/";

export const Local = {
  getData: typeDate => {
    return data[typeDate];
  },
  getDataURL: async typeDate => {
    return await fetch(`${URL}/${typeDate}.json`).then(res => res.json());
  }
};
