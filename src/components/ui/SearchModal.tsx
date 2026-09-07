"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchIndex, type SearchItem } from "../../data/searchIndex";
import "./SearchModal.css";

export default function SearchModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : searchIndex.slice(0, 8);

  const filteredResults = results.slice(0, 10);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleOpen();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!listRef.current) return;
    const item = listRef.current.children[selectedIndex] as HTMLElement;
    if (item) {
      item.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
      router.push(filteredResults[selectedIndex].route);
      handleClose();
    } else if (e.key === "Escape") {
      handleClose();
    }
  };

  const categoryLabels: Record<string, string> = {
    docs: "Documentation",
    pages: "Pages",
    actions: "Actions",
  };

  const categoryColors: Record<string, string> = {
    docs: "search-modal__badge--docs",
    pages: "search-modal__badge--pages",
    actions: "search-modal__badge--actions",
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal" onClick={handleClose}>
      <div className="search-modal__backdrop" />
      <div className="search-modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal__input-wrapper">
          <svg className="search-modal__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-modal__input"
            placeholder="Search documentation, pages, and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className="search-modal__kbd">ESC</kbd>
        </div>

        <div className="search-modal__results" ref={listRef}>
          {filteredResults.length === 0 ? (
            <div className="search-modal__empty">No results found</div>
          ) : (
            filteredResults.map((item, idx) => (
              <Link
                key={item.route}
                href={item.route}
                className={`search-modal__item ${idx === selectedIndex ? "search-modal__item--selected" : ""}`}
                onClick={handleClose}
              >
                <span className={`search-modal__badge ${categoryColors[item.category]}`}>
                  {categoryLabels[item.category]}
                </span>
                <div className="search-modal__item-content">
                  <div className="search-modal__item-title">{item.title}</div>
                  <div className="search-modal__item-desc">{item.description}</div>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="search-modal__footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Open</span>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
