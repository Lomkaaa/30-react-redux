import { useSelector } from "react-redux";
import "./BookList.css";

export const BookList = () => {
    const books = useSelector((state) => state.books);
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p> Список книг пуст..</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={i}>
                            <div className="book-info">
                                {1 + i++}."{book.title}" to{" "}
                                <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
