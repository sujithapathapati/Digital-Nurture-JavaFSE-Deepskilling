package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Constructor Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Constructor Injection Done");
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter Injection Done");
    }

    public void addBook() {
        bookRepository.saveBook();
        System.out.println("Book added via service");
    }
}       System.out.println("Setter Injection Done");
    }

    public void addBook() {
        bookRepository.saveBook();
        System.out.println("Book added via service");
    }
}