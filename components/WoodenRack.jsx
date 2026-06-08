import React, { forwardRef, useState } from "react";
import { useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import LibraryContext from "../src/LibraryContext";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const WoodenRack = forwardRef((props, ref) => {
  const supabase = createClient(url, key);
  const number = props.number;
  const side = props.side;
  const id = props.id;
  const {
    highlightedId,
    found,
    setHighlightedId,
    setBooks,
    setCurrentPage,
    setFound,
  } = useContext(LibraryContext);
  const highlight = id === highlightedId;

  return (
    <div
      className={`${highlight ? "scale-105" : ""} md:hover:bg-none relative flex cursor-pointer bg-[#FEA630] md:hover:scale-105 items-center border-2 border-amber-800 justify-center`}
      onClick={async () => {
        setHighlightedId(id);
        try {
          const { data, error } = await supabase
            .from("books")
            .select("title, type, number, side, location_id")
            .eq("location_id", id);

          if (error) throw error;
          if (data.length === 0) {
            setBooks([]);
            setFound(false);
          } else {
            setFound(true);
            setBooks(data);
            setCurrentPage(1);
          }
        } catch (error) {
          console.error("Search failed:", error);
        }
      }}
    >
      <p className="text-[1.1cqh] font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">{`${side} ${number}`}</p>
      <img
        ref={ref}
        src="/assets/wooden.png"
        className={`${highlight ? "opacity-0" : ""} md:hover:opacity-0 h-[2.47cqh] w-full`}
      />
    </div>
  );
});

export default WoodenRack;
