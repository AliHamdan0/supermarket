import { Dispatch } from "react";
import { ImageSourcePropType } from "react-native";
export type searchBarTypes = {
  searchValue: string;
  setSearchValue: Dispatch<React.SetStateAction<string>>;
};
export type item = {
  image: ImageSourcePropType;
  title: string;
  desc: string;
  price: string | number;
  id: number | string;
};
export type foodCardTypes = {
  item: item;
  dynamicWidth?: number;
};
export type cardListTypes = {
  data: item[];
  title: string;
  link: string;
};
export type nutritionType = {
  text: string;
};
export type categoryCardType = {
  color: string;
  items: item[];
  borderColor: string;
  title: string;
  image: ImageSourcePropType;
};
export type filterType = {
  open: boolean;
  handleClose: () => void;
};
export type cartItem = {
  price: number | string;
  singlePrice: number;
  quantity: number;
  desc: string;
  title: string;
  image: ImageSourcePropType;
};
