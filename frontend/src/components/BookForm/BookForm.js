import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import { setError } from "../../redux/slices/errorSlice";
import "./BookForm.css";
import { FaSpinner } from "react-icons/fa";

import bookData from "../../data/books.json";

export const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    //

    //
    const handleAddRandomBookViaAPI = async () => {
        try {
            setIsLoading(true);
            await dispatch(
                fetchBook("http://localhost:4000/random-book-delayed")
            );
        } finally {
            setIsLoading(false);
        }
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
        } else {
            dispatch(setError("Поле ввода не должно быть пустым."));
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
                </div>
            </form>
            <button onClick={handeleAddRandomBook}>Добавить случайно</button>

            <button
                onClick={handleAddRandomBookViaAPI}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <span>загрузка...</span>
                        <FaSpinner className="spinner" />
                    </>
                ) : (
                    "взять из Интернета"
                )}
            </button>
        </div>
    );
};
