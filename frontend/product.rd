import React, { useState } from "react";

function ProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5678/products/search/${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok || data.error) {
        setError(data.error || "Unknown error");
        setResults([]);
      } else {
        setError("");
        setResults(data);
      }
    } catch (err) {
      setError("Server error");
      setResults([]);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 w-full rounded mb-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4">
        {results.map((product) => (
          <li key={product.id} className="border-b py-2">
            <strong>{product.name}</strong> – ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;

const searchProductsByCategoryName = async (name) => {
    try {
        const res = await fetch(`http://localhost:5678/product/category/name/${name}`);
        const data = await res.json();
        if (res.ok) {
            setProducts(data); // oder was du brauchst
        } else {
            console.error(data.message);
        }
    } catch (err) {
        console.error("Error fetching products:", err);
    }
};

hier mit rendering als dropdown buttons
import { useEffect, useState } from "react";

function CategoryFilter({ onSelect }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5678/category")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.error("Failed to fetch categories", err));
    }, []);

    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                    {cat.name}
                </option>
            ))}
        </select>
    );
}

