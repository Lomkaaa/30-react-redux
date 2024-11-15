import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import "./BookForm.css";
import bookData from "../../data/books.json";

export const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    //
    const handeleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * bookData.length);
        const randomBook = bookData[randomIndex];
        const randomBookId = {
            ...randomBook,
            id: uuidv4(),
            isFavorite: false,
        };
        dispatch(addBook(randomBookId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author.length > 0) {
            const book = {
                title: title,
                author: author,
                id: uuidv4(),
                isFavorite: false,
            };
            dispatch(addBook(book));

            setAuthor("");
            setTitle("");
            console.log(book);
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
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                    <button type="submit">Add Book</button>
                    <button onClick={handeleAddRandomBook}> Add random</button>
                </div>
            </form>
        </div>
    );
};
