import { useState } from "react";
import "./BookForm.css";

export const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author.length > 0) {
            //dispatch action

            setAuthor("");
            setTitle("");
        }
    };
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="author">Title:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                    <button type="submit">Add Book</button>
                </div>
            </form>
        </div>
    );
};
