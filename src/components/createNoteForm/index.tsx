export const CreateNoteForm = () => {
    return (
        <section className="section">
            <form action="../index.html">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <label htmlFor="category">Category</label>
                <select id="category" name="category">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                </select>
                <label htmlFor="text-content"></label>
                <textarea name="text_content" id="text-content" placeholder="Text" required></textarea>
                <label htmlFor="note-status">Completed</label>
                <input id="note-status" type="checkbox" name="status"/>
                <input className="btn-success" type="submit" value="Add note"/>
            </form>
        </section>
    )
}