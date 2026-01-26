import { LucideIcon } from "lucide-react";

export type LinksType = {
  id: number;
  name: string;
  url: string;
};

export type LinkType = LinksType[];

export type ImagesType = {
  id: number;
  name: string;
  image: string;
  type: string;
  amount: string;
};

export type ImageType = ImagesType[];

export type DescriptionsType = {
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
};

export type DescriptionType = DescriptionsType[];
