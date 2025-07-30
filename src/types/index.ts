
export interface MonthlyData {
  currentEarnings: number;
  currentOrders: number;
  currentSales: number;
  currentCustomers: number;
  previousMonthComparison: {
    earningsDifference: number;
    ordersDifference: number;
    salesDifference: number;
    customersDifference: number;
    earningsPercentageChange: number;
    ordersPercentageChange: number;
    salesPercentageChange: number;
    customersPercentageChange: number;
  };
}




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
  _id: string;
  name: string;
  salePrice: string;
  image?: string;
  isFeatured: boolean;
}

export interface ChartData {
  month: string;
  income: number;
  refund: number;
}