const API_URL = 'http://localhost:3000/tasks';

export interface Task {
  id: number;
  title: string;
  priority: 'Alta' | 'Media' | 'Baja';
  completed: boolean;
  description?: string;
  category?: string;
}

export const taskService = {
  getAll: async (): Promise<Task[]> => {
    const res = await fetch(API_URL);
    return res.json();
  },

  create: async (title: string, priority: string): Promise<Task> => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, priority }),
    });
    return res.json();
  },

  update: async (id: number, data: Partial<Task>): Promise<Task> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  delete: async (id: number): Promise<void> => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  },
};