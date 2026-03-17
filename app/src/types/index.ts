export interface Product {
  _id: string;
  name: string;
  price: number;
  category: 'live-chicken' | 'eggs' | 'chicks' | 'processed' | 'manure' | 'feeds';
  description: string;
  stock: number;
  image: string;
  weight?: string;
  featured?: boolean;
  bulkAvailable?: boolean;
  bulkMinQuantity?: number;
  bulkDiscount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  customerName: string;
  phone: string;
  email?: string;
  location: string;
  items: OrderItem[];
  totalAmount: number;
  deliveryFee?: number;
  status: 'Pending' | 'Confirmed' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  paymentMethod: 'Cash' | 'M-Pesa' | 'Bank Transfer';
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  notes?: string;
  isBulkOrder?: boolean;
  businessName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Admin {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager';
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}
