package com.upb.bookstore.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.upb.bookstore.model.Book;
import com.upb.bookstore.service.BookService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RestController
@RequestMapping(path="/api/v1/rest" , name = "Book_App")

public class BookController {
	private BookService bookService;
	
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}
	@PostMapping(path = "/books", name="create")
	@ResponseStatus(HttpStatus.CREATED)
	public Book add (@RequestBody Book book) {
		return this.bookService.saveBook(book);
	}
	
	@GetMapping(path = "/books",name = "list")
	@ResponseStatus(HttpStatus.OK)
	public List<Book> list(){
		return this.bookService.getAllBooks();
		 
	}
	@GetMapping(path = "/books/{id}", name = "read")
	@ResponseStatus(HttpStatus.OK)
	public Optional<Book> read(@PathVariable Long id){
		return this.bookService.getOneBook(id);
	}
	
	@PutMapping(path = "/books/{id}" , name = "update")
	@ResponseStatus(HttpStatus.OK)
	public Book update (@RequestBody Book book , Long id) {
		return this.bookService.updateBook(book, id);
	}
	@DeleteMapping(path = "/books/{id}" , name = "remove")
	@ResponseStatus(HttpStatus.NO_CONTENT )
	public void remove(@PathVariable Long id) {
		this.bookService.removeBook(id);
	}
}
