import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";

import "./BookForm.css";

import bookData from "../../data/books.json";

export const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    //

    //
    const handleAddRandomBookViaAPI = () => {
        dispatch(fetchBook());
    };
    //

    //
    const handeleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * bookData.length);
        const randomBook = bookData[randomIndex];
        const randomBookId = {
            ...randomBook,
            source: "случайный ввод",
            id: uuidv4(),
            isFavorite: false,
        };
        dispatch(addBook(randomBookId));
    };
    //
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author.length > 0) {
            const book = {
                source: "добавил сам",
                title: title,
                author: author,
                id: uuidv4(),
                isFavorite: false,
            };
            dispatch(addBook(book));

            setAuthor("");
            setTitle("");
        }
    };
    //
    //
    //
    return (
        <div className="app-block book-form">
            <h2>Добавить новую книгу</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Название:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="author">Автор:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                    <button type="submit">Добавить книгу</button>
                    <button onClick={handeleAddRandomBook}>
                        Добавить случайно
                    </button>
                    <button onClick={handleAddRandomBookViaAPI} type="submit">
                        Добавить через API
                    </button>
                </div>
            </form>
        </div>
    );
};
