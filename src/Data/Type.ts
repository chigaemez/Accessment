
export interface Product {
  id: number;
  title: string;
  price: number;
  image?: string; 
}

export interface ProductResponse {
  products: Product[];
}

export interface Card {
  title: string;
  desc: string;
  img: string;
}

export interface Feature {
  title: string;
  img: string;
}
 
export interface PopupState {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
}

export interface ChristmasItem {
  title: string;
  price: string;
  img: string;
  rating: number;
}

export interface NextProduct {
  title: string;
  price: string;
  img: string;
  rating: number;
}
