export interface TUser {
  name: string;
  email: string;
  role: 'user' | 'deliveryMan' | 'admin';
  phone: number;
  address: string;
  password: string;
}
