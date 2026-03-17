import type { Product, Order } from '@/types';
import { mockProducts } from './mockData';

const API_URL = import.meta.env.VITE_API_URL || '/api';
const USE_MOCK_DATA = !import.meta.env.VITE_API_URL;

class ApiService {
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (USE_MOCK_DATA) {
      throw new Error('Using mock data');
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Products
  async getProducts(category?: string, featured?: boolean, search?: string): Promise<Product[]> {
    try {
      // Try to fetch from API first
      if (!USE_MOCK_DATA) {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (featured) params.append('featured', 'true');
        if (search) params.append('search', search);
        
        return this.fetch<Product[]>(`/products?${params.toString()}`);
      }
    } catch {
      // Fall back to mock data
    }

    // Filter mock data
    let products = [...mockProducts];
    
    if (category) {
      products = products.filter(p => p.category === category);
    }
    
    if (featured) {
      products = products.filter(p => p.featured);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
    
    return products;
  }

  async getProduct(id: string): Promise<Product> {
    try {
      if (!USE_MOCK_DATA) {
        return this.fetch<Product>(`/products/${id}`);
      }
    } catch {
      // Fall back to mock data
    }

    const product = mockProducts.find(p => p._id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    return this.fetch<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    return this.fetch<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  }

  async deleteProduct(id: string): Promise<void> {
    return this.fetch<void>(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Orders
  async getOrders(status?: string): Promise<Order[]> {
    const params = status ? `?status=${status}` : '';
    return this.fetch<Order[]>(`/orders${params}`);
  }

  async getOrder(id: string): Promise<Order> {
    return this.fetch<Order>(`/orders/${id}`);
  }

  async createOrder(order: Partial<Order>): Promise<Order> {
    return this.fetch<Order>('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  async updateOrderStatus(id: string, status: string): Promise<Order> {
    return this.fetch<Order>(`/orders/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  // Auth
  async login(email: string, password: string): Promise<{ token: string; admin: any }> {
    return this.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async verifyToken(token: string): Promise<{ admin: any }> {
    return this.fetch('/auth/verify', {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export const api = new ApiService();
