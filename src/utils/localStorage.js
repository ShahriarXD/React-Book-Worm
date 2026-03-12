export const getStoredBooks = (key) => {
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

export const saveBook = (key, id) => {
  const storedBooks = getStoredBooks(key);
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem(key, JSON.stringify(storedBooks));
    return true;
  }
  return false;
};
