import React, { useEffect } from "react";
import { useState } from "react";
import LibraryContext from "../src/LibraryContext";
import { useContext } from "react";
import { LoaderCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const BooksPane = () => {
  const supabase = createClient(url, key);
  const [query, setQuery] = useState("");
  const { books, setBooks, setHighlightedId, found, setFound, highlightedId } =
    useContext(LibraryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (!query.trim()) {
      setBooks([]);
      return;
    }

    const performSearch = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("books")
          .select("title, type, number, side, location_id")
          .ilike("title", `%${query}%`);

        if (error) throw error;

        setBooks(data || []);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      performSearch();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    /* Adjusted container padding to scale with screens (p-3 -> md:p-5 -> lg:p-6) */
    <div className="bg-[#dbc397] w-full m-3 rounded-2xl p-3 md:p-5 lg:p-6 flex flex-col sm:h-full border-amber-900 border-2">
      {/* Title scales from text-xl up to text-3xl */}
      <h2 className="text-xl lg:text-3xl font-bold font-mono text-amber-900 mb-4 lg:mb-6">
        Find a Book
      </h2>

      {/* Input text scales from text-xs up to text-base; padding scales up accordingly */}
      <input
        type="text"
        id="book-search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setCurrentPage(1);
        }}
        placeholder="Enter Book Title or Topic..."
        className="w-full p-3 md:p-4 border-2 border-[#B83D1E] text-xs md:text-sm lg:text-base text-amber-900 font-bold font-mono rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-900"
      />

      {isLoading ? (
        <div className="flex flex-1 mt-10 justify-center">
          <LoaderCircle className="animate-spin" size={48} color="#B83D1E" />
        </div>
      ) : (
        <>
          {/* Items wrapper space increases on larger screens */}
          <div
            id="results-list"
            className="mt-6 flex-1 overflow-y-auto space-y-3 md:space-y-4"
          >
            {!found && (
              <p className="font-mono text-xl text-amber-900 text-center">
                No books found for {highlightedId}.
              </p>
            )}

            {query.trim() !== "" && books.length === 0 && (
              <p className="font-mono text-xl text-amber-900 text-center">
                No books found.
              </p>
            )}

            {currentItems.map((book, i) => (
              /* Card container handles scaling padding */
              <div
                key={i}
                className="p-4 md:p-5 border bg-amber-100 border-amber-900 rounded-2xl shadow-sm"
              >
                {/* Book Title text scaling */}
                <p className="font-bold text-xs md:text-sm lg:text-base text-amber-900 mb-1">
                  {book.title}
                </p>

                {/* Location info text scaling */}
                <p className="text-xs md:text-sm text-[#ba3e1f] mb-3 lg:mb-4">
                  {`${book.type} ${book.number} | ${book.side}`}
                </p>

                {/* Button scales its internal text and horizontal/vertical padding steps */}
                <button
                  className="hover:scale-105 text-xs md:text-sm cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-full py-1 px-3 md:py-1.5 md:px-4 text-white transition-all duration-200"
                  onClick={() => setHighlightedId(book.location_id)}
                >
                  Show on Map
                </button>
              </div>
            ))}
          </div>

          {/* Pagination controls text and button dimension scaling */}
          {books.length > itemsPerPage && (
            <div className="flex justify-evenly items-center mx-4 mt-4 lg:mt-6 text-xs md:text-sm lg:text-base font-mono font-bold text-amber-900">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="disabled:opacity-30 hover:scale-105 text-xs md:text-sm cursor-pointer py-1 px-3 md:py-1.5 md:px-4 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-full text-white transition-all duration-200"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="disabled:opacity-30 hover:scale-105 text-xs md:text-sm cursor-pointer py-1 px-3 md:py-1.5 md:px-4 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-full text-white transition-all duration-200"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BooksPane;
