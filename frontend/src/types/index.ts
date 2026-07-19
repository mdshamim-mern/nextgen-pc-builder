export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface IComponent {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  image?: string;
  features: Record<string, string>;
}

export interface IOrder {
  id: string;
  userId: string;
  totalPrice: number;
  status: string;
  createdAt: string;
}