import styles from "./NewNote.css";

function NewNote() {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form method="post" id="note-form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions mt-2">
        <button type="submit">Add Note</button>
      </div>
    </form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
