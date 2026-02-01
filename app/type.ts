import { LucideIcon } from "lucide-react";

export type LinksType = {
  id: number;
  name: string;
  url: string;
};

export type LinkType = LinksType[];

export type ImagesType = {
  id?: number;
  name?: string;
 reviewPerson?: string;
  image?: string;
  type?: string;
  amount?: string;
  job?: string;
  review?: string;
  personImg: string | undefined;
  reviewImg?: string;
};

export type ImageType = ImagesType[];

export type DescriptionsType = {
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
};

export type DescriptionType = DescriptionsType[];
