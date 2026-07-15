// src/App.js
import React from 'react';
import './App.css';

// Mock list matrices matching the document layout requirements
const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/2021' }
];

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

const blogs = [
  { id: 201, title: 'React Learning', author: 'Stephen Biz', text: 'Welcome to learning React!' },
  { id: 202, title: 'Installation', author: 'Schewzdenier', text: 'You can install React from npm.' }
];

function App() {
  // 1. Element variable configuration for Course Details list iteration
  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <p style={{ fontWeight: '500' }}>{course.date}</p>
        </div>
      ))}
    </ul>
  );

  // 2. Element variable matching the exact Book Details structural hint
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  // 3. Element variable layout for Blog Details mapping
  const content = (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h3>{blog.author}</h3>
          <p style={{ color: '#555', fontStyle: 'italic' }}>{blog.text}</p>
        </div>
      ))}
    </ul>
  );

  // Returns components mapped with unique layout keys into side-by-side div boxes
  return (
    <div className="container">
      {/* Course Details column wrapper */}
      <div className="mystyle1">
        <h1>Course Details</h1>
        {coursedet}
      </div>

      {/* Book Details column wrapper */}
      <div className="st2">
        <h1>Book Details</h1>
        {bookdet}
      </div>

      {/* Blog Details column wrapper */}
      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>
    </div>
  );
}

export default App;