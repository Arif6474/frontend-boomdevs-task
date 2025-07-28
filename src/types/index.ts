export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  featured: boolean;
  orders: number;
}

export interface ChartData {
  month: string;
  income: number;
  refund: number;
}