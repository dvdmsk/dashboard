export interface UserType {
  id: string;
  name: string;
  email: string;
  status: 'Online' | 'Offline';
  lastLogin: string; 
}
