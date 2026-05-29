import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { useNoteStore } from "@/store/noteStore";
import { FAB } from "@/components/ui/fab";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Note } from "@/lib/types";

export default function NotesPage() {
  const { notes, addNote, updateNote, deleteNote } = useNoteStore();
  const { toast } = useToast();
  const [openNote, setOpenNote] = useState<Note | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isCreating && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isCreating]);

  const handleCreate = () => {
    if (!newTitle.trim()) { setIsCreating(false); return; }
    addNote(newTitle.trim(), "");
    const created = { ...notes[0] }; // temp; store will have it
    setNewTitle("");
    setIsCreating(false);
    // Open the freshly created note
    setTimeout(() => {
      const latest = useNoteStore.getState().notes[0];
      if (latest) setOpenNote(latest);
    }, 50);
    toast({ title: "Note created" });
  };

  const handleContentChange = (value: string) => {
    if (!openNote) return;
    const updated = { ...openNote, content: value };
    setOpenNote(updated);
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      updateNote(updated.id, { content: value });
      toast({ title: "Saved", duration: 1000 });
    }, 800);
  };

  const handleTitleChange = (value: string) => {
    if (!openNote) return;
    const updated = { ...openNote, title: value };
    setOpenNote(updated);
    updateNote(updated.id, { title: value });
  };

  const handleDelete = (id: string) => {
    deleteNote(id);
    if (openNote?.id === id) setOpenNote(null);
    toast({ title: "Note deleted" });
  };

  if (openNote) {
    return (
      <div className="flex flex-col min-h-[100dvh] bg-background animate-in fade-in duration-200">
        <div className="flex items-center gap-3 p-4 border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
          <button
            onClick={() => setOpenNote(null)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            data-testid="button-back-from-note"
            aria-label="Back to notes"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <input
            value={openNote.title}
            onChange={e => handleTitleChange(e.target.value)}
            className="flex-1 font-serif text-lg font-semibold bg-transparent border-none outline-none text-foreground"
            data-testid="input-note-title-editor"
            aria-label="Note title"
          />
          <button
            onClick={() => handleDelete(openNote.id)}
            className="p-2 rounded-lg text-muted-foreground hover:text-destructive transition-colors"
            data-testid="button-delete-note-editor"
            aria-label="Delete note"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
        <textarea
          value={openNote.content}
          onChange={e => handleContentChange(e.target.value)}
          placeholder="Start writing..."
          className="flex-1 p-6 text-base leading-relaxed bg-transparent border-none resize-none outline-none text-foreground placeholder:text-muted-foreground/50 font-sans"
          style={{ minHeight: "calc(100dvh - 70px)" }}
          data-testid="textarea-note-content"
          aria-label="Note content"
        />
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="p-6 pb-28 flex flex-col gap-4 animate-in fade-in duration-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCreating(false)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Cancel"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <h1 className="font-serif text-xl font-bold">New Note</h1>
        </div>
        <Input
          ref={titleInputRef}
          placeholder="Note title..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleCreate()}
          className="h-12 text-lg"
          data-testid="input-new-note-title"
        />
        <Button onClick={handleCreate} className="h-12" data-testid="button-create-note">
          Create Note
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 pb-28 flex flex-col gap-6 animate-in fade-in duration-300">
      <header>
        <h1 className="font-serif text-2xl font-bold text-foreground">Notes</h1>
        <p className="text-sm text-muted-foreground mt-1">{notes.length} note{notes.length !== 1 ? "s" : ""}</p>
      </header>

      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
          <FileText className="w-12 h-12 text-muted-foreground/40" />
          <p className="text-muted-foreground font-medium">No notes yet.</p>
          <p className="text-sm text-muted-foreground/70">Tap + to write your first note</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {notes.map(note => (
            <div
              key={note.id}
              data-testid={`note-card-${note.id}`}
              className="p-4 bg-card rounded-xl border border-card-border shadow-sm cursor-pointer transition-all hover:-translate-y-0.5 group"
              onClick={() => setOpenNote(note)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{note.title || "Untitled"}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {note.content || "Empty note"}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    {format(new Date(note.updated_at), "MMM d, yyyy")}
                  </p>
                </div>
                <button
                  onClick={e => { e.stopPropagation(); handleDelete(note.id); }}
                  data-testid={`button-delete-note-${note.id}`}
                  className="p-1.5 text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-destructive transition-all rounded-lg ml-2 flex-shrink-0"
                  aria-label="Delete note"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <FAB onClick={() => setIsCreating(true)} />
    </div>
  );
}
