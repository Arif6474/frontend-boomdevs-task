import { LayoutDashboard, User, Package, Users, MessageSquare, Settings, HelpCircle, LogOut } from 'lucide-react';

export const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/', subItems: [] },
  { icon: User, label: 'Profile', path: '/profile', subItems: [] },
  {
    icon: Package,
    label: 'Product',
    path: '/products',
    subItems: ['Smartwatch', 'Drone', 'Speaker', 'Chargers']
  },
  { icon: Users, label: 'Customers', path: '/customers', subItems: [] },
  { icon: MessageSquare, label: 'Message', path: '/messages', count: 20, subItems: [] }
];

export const accountItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
  { icon: LogOut, label: 'Log Out', path: '/' }
];
