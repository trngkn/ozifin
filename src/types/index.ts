export interface User {
  id: string;
  username: string;
  role: 'admin' | 'manager' | 'sale';
  display_name: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  timestamp: string;
  sale: string;
  agency: string;
  customer: string;
  bank: string;
  card_type: string;
  last4: string;
  type: 'Rút' | 'Đáo' | 'Rút+Đáo';
  amount: number;
  withdraw_amt?: number;
  pos?: string;
  pos_fee?: number;
  pos_amt?: number;
  cust_fee?: number;
  cust_amt?: number;
  profit?: number;
  status: 'Chưa thanh toán' | 'Đã thanh toán';
  img_deposit?: string[];
  img_withdraw?: string[];
  img_invoice?: string[];
  created_by: string;
  created_at: string;
  edit_count: number;
  updated_at: string;
}

export interface Setting {
  id: string;
  category: string;
  value: string;
  created_at: string;
}

export interface DashboardStats {
  totalVolume: number;
  totalProfit: number;
  transactionCount: number;
  avgProfit: number;
}

export interface ChartData {
  labels: string[];
  volume: number[];
  profit: number[];
}

export interface TransactionFilters {
  startDate?: string;
  endDate?: string;
  customer?: string;
  sale?: string;
  agency?: string;
  pos?: string;
  type?: string;
}


export interface CustomerSuggestion {
  name: string;
  bank: string;
  cardType: string;
  last4: string;
}

export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  title: string;
  description: string; // HTML
  status: TaskStatus;
  priority: TaskPriority;
  assignees: string[]; // usernames
  tags: string[];
  due_date?: string;
  created_by: string; // username
  created_at: string;
  updated_at: string;
  index: number;
}

export interface TaskComment {
  id: string;
  task_id: string;
  user_id: string; // username
  content: string;
  created_at: string;
}

export interface TaskHistory {
  id: string;
  task_id: string;
  user_id: string; // username
  action: string;
  details: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  link?: string;
  is_read: boolean;
  created_at: string;
}
