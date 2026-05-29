import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Note } from '../lib/types';

interface NoteState {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
}

export const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (title, content) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              id: crypto.randomUUID(),
              title,
              content,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ],
        })),
      updateNote: (id, updates) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, ...updates, updated_at: new Date().toISOString() }
              : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: 'craizeg_notes',
    }
  )
);
