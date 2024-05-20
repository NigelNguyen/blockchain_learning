import List "mo:base/List";
import Debug "mo:base/Debug";

actor dkeeper {
  type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(textTitle: Text, textContent: Text) {
    let newNote: Note = {
      title = textTitle;
      content = textContent;
    };

    notes := List.push(newNote, notes);
  };

  public query func getNotes(): async [Note]{
    return List.toArray(notes);
  };

  public func deleteNote(id: Nat) {
    let left = List.take(notes, id);
    let right = List.drop(notes, id+1);
    notes := List.append(left, right);
  }
};
