// Import the MagnifyingGlassIcon component from Heroicons and the useState hook from React
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

// Header component that displays the search input field and search button
export function Header({ isLoading, onSearch }) {
  // State variable for the search input value
  const [searchUser, setSearchUser] = useState("");

  // Render the header component
  return (
    <header>
      <h1>GitSearch</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a user..."
          readOnly={isLoading}
          onChange={(e) => setSearchUser(e.target.value)}
        />

        <button
          disabled={isLoading}
          onClick={() => onSearch(searchUser)}
          aria-label="search button"
        >
          <span>
            <MagnifyingGlassIcon width={20} padding={0} />
          </span>
        </button>
      </div>
    </header>
  );
}
