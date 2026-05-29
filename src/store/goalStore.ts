import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Goal } from '../lib/types';

interface GoalState {
  goals: Goal[];
  addGoal: (title: string, target_date: string | null) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  deleteGoal: (id: string) => void;
  updateProgress: (id: string, progress: number) => void;
}

export const useGoalStore = create<GoalState>()(
  persist(
    (set) => ({
      goals: [],
      addGoal: (title, target_date) =>
        set((state) => ({
          goals: [
            ...state.goals,
            {
              id: crypto.randomUUID(),
              title,
              progress: 0,
              target_date,
              created_at: new Date().toISOString(),
            },
          ],
        })),
      updateGoal: (id, updates) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id ? { ...goal, ...updates } : goal
          ),
        })),
      deleteGoal: (id) =>
        set((state) => ({
          goals: state.goals.filter((goal) => goal.id !== id),
        })),
      updateProgress: (id, progress) =>
        set((state) => ({
          goals: state.goals.map((goal) =>
            goal.id === id ? { ...goal, progress } : goal
          ),
        })),
    }),
    {
      name: 'craizeg_goals',
    }
  )
);
