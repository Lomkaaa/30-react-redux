import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import "./BookList.css";

export const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);

    const handleAddDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p> Список книг пуст..</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}."{book.title}" для -
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                {book.isFavorite ? (
                                    <BsBookmarkStarFill
                                        onClick={() =>
                                            handleToggleFavorite(book.id)
                                        }
                                        className="star-icon"
                                    />
                                ) : (
                                    <BsBookmarkStar
                                        onClick={() =>
                                            handleToggleFavorite(book.id)
                                        }
                                        className="star-icon"
                                    />
                                )}
                                <button
                                    onClick={() => handleAddDeleteBook(book.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
