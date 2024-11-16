import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import "./BookList.css";

export const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    //
    //

    const handleAddDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    //
    //

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };
    //
    //
    const titleFilter = useSelector(selectTitleFilter);
    //
    //

    const filterBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        return matchesTitle;
    });

    return (
        <div className="app-block book-list">
            <h2>Список книг</h2>
            {books.length === 0 ? (
                <p> Список книг пуст..</p>
            ) : (
                <ul>
                    {filterBooks.map((book, i) => (
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
