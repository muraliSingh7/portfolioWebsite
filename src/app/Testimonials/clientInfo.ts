import { StaticImageData } from "next/image";

export interface ClientInfo {
  name: string;
  review: string;
  rating: number;
  clientImage: string | StaticImageData;
  location: string;
}
