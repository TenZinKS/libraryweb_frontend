// @ts-ignore
import React from 'react';
import '/src/components/styles/dashboard.css';

const books = [
    { title: 'Book 1', author: 'Author 1', releaseYear: 2001, available: true },
    { title: 'Book 2', author: 'Author 2', releaseYear: 2002, available: false },
    { title: 'Book 3', author: 'Author 3', releaseYear: 2003, available: true },
    { title: 'Book 4', author: 'Author 4', releaseYear: 2004, available: true },
    // Add more book objects here
];

function DashboardMain() {
    return (
        <div className="db-main-frame">
            <div className="books-grid">
                <div className="add-cell">
                    <img className="add-img" src="../public/assets/images/add.png" alt="add note"/>
                </div>
                {books.map((book, index) => (
                    <div key={index} className="books-cell">
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Release Year:</strong> {book.releaseYear}</p>
                        <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardMain;
