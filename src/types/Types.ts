export interface IProps {
  id?: number;
  title: string;
  price: string;
  colors: string[];
  description: string;
  category?: {
    name: string;
    imageUrl: string;
  };
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IInputTypes {
  id: string;
  name: "title" | "description" | "image" | "price";
  label: string;
  type: string;
}
