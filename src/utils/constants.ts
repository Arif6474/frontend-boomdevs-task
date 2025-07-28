import { StatCard, Product, ChartData } from '../types';

export const statsData: StatCard[] = [
  {
    title: 'Monthly Earnings',
    value: '$108,906',
    change: '5.2%',
    isPositive: false,
    description: 'You earn extra $5,990 this month',
    icon: 'dollarsign'
  },
  {
    title: 'Total Orders',
    value: '+2,345',
    change: '6.2%',
    isPositive: true,
    description: 'You received 180 more orders this month',
    icon: 'shoppingbag'
  },
  {
    title: 'Total Sales',
    value: '$256,740',
    change: '3.8%',
    isPositive: false,
    description: 'Sales revenue fell by $10,200 this month',
    icon: 'trendingup'
  },
  {
    title: 'New Customers',
    value: '+1,230',
    change: '5.7%',
    isPositive: true,
    description: 'Gained 65 new customers this month',
    icon: 'users'
  }
];

export const chartData: ChartData[] = [
  { month: 'Jan', income: 500, refund: 400 },
  { month: 'Feb', income: 1500, refund: 800 },
  { month: 'Mar', income: 3500, refund: 1200 },
  { month: 'Apr', income: 1800, refund: 900 },
  { month: 'May', income: 2200, refund: 1000 },
  { month: 'Jun', income: 1600, refund: 700 }
];

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Smartwatch',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    orders: 1500
  },
  {
    id: '2',
    name: 'Speaker',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    orders: 900
  },
  {
    id: '3',
    name: 'Drone',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    orders: 900
  },
  {
    id: '4',
    name: 'Handphone',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    orders: 10
  },
  {
    id: '5',
    name: 'Laptop',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    orders: 0
  },
  {
    id: '6',
    name: 'Bag',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    orders: 0
  },
  {
    id: '7',
    name: 'Monitor',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    orders: 0
  },
  {
    id: '8',  
    name: 'iPhone',
    price: '$1,240',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    orders: 0
  }
];