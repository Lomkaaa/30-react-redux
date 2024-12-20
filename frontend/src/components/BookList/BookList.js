import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
    deleteBook,
    toggleFavorite,
    selectBooks,
} from "../../redux/slices/booksSlice";
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavorite,
} from "../../redux/slices/filterSlice";
import "./BookList.css";

export const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
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
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite);

    //
    //

    const filterBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());

        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : books;

        return matchesTitle && matchesAuthor && matchesFavorite; //что бы работала одновремнно
    });
    //
    //
    const highlightMatch = (text, filter) => {
        if (!filter) {
            return text;
        }

        const regex = new RegExp(`(${filter})`, "gi");
        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
    };
    //
    //
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
                                {++i}.{highlightMatch(book.title, titleFilter)}
                                {" - "}
                                <strong>
                                    {highlightMatch(book.author, authorFilter)}
                                </strong>{" "}
                                ({book.source})
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
