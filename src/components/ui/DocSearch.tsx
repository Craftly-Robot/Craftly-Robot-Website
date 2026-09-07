"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { docSearchIndex, DocSearchItem } from "@/data/docs/search-index";
import "./DocSearch.css";

export default function DocSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<DocSearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    const lower = query.toLowerCase();
    const filtered = docSearchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const selected = listRef.current?.children[selectedIndex] as HTMLElement;
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="doc-search-trigger" onClick={() => setIsOpen(true)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="doc-search-trigger__text">Search docs...</span>
        <kbd className="doc-search-trigger__kbd">
          <span>⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className="doc-search-overlay" onClick={() => setIsOpen(false)}>
          <div className="doc-search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="doc-search-input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="doc-search-input"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <kbd className="doc-search-esc" onClick={() => setIsOpen(false)}>
                ESC
              </kbd>
            </div>

            {query.trim() && (
              <div className="doc-search-results" ref={listRef}>
                {results.length === 0 ? (
                  <div className="doc-search-empty">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  results.map((item, idx) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className={`doc-search-result ${idx === selectedIndex ? "doc-search-result--selected" : ""}`}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                    >
                      <div className="doc-search-result__category">
                        {item.category}
                      </div>
                      <div className="doc-search-result__title">
                        {item.title}
                      </div>
                      <div className="doc-search-result__desc">
                        {item.description}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
