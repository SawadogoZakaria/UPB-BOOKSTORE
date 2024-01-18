package com.upb.bookstore.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.upb.bookstore.exception.BookNotFoundException;
import com.upb.bookstore.model.Book;
import com.upb.bookstore.repository.BookRepository;

@Service
public class BookService {
  
	private BookRepository bookRepository;
	
	 public BookService(BookRepository bookRepository) {
		 this.bookRepository = bookRepository;
	}
	
	 
	 public Book saveBook(Book book) {
		return this.bookRepository.save(book);	 
	 }
	 
	 
	 
	 public List<Book>getAllBooks(){
		 return this.bookRepository.findAll();
	 }
	 
	 

	 public Optional<Book>getOneBook(Long id){ 
Optional<Book> book = this.bookRepository.findById(id);
	 if (!book.isPresent()) {
		 throw new BookNotFoundException(String.format("%s introuvable" +id));
	 }
	 return this.bookRepository.findById(id);
	 }
	 
	 
	 
	 public Book updateBook(Book book ,Long id) {
Optional<Book> bookExist = this.bookRepository.findById(id);
		 if (!bookExist.isPresent()) { 
			 throw new BookNotFoundException(String.format("%s introuvable" +id));
		 }
		 return this.saveBook(book);
	 }
	 
	 
	 
	 public void removeBook(Long id) {  
Optional<Book> book = this.bookRepository.findById(id);
		 if (!book.isPresent()) {	 
			 throw new BookNotFoundException(String.format("%s introuvable" +id));
		 }
		 
	 }
}
