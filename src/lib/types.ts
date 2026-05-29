export type Task = {
  id: string;
  title: string;
  is_done: boolean;
  due_date: string | null;
  created_at: string;
};

export type Goal = {
  id: string;
  title: string;
  progress: number;
  target_date: string | null;
  created_at: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};
