package com.upb.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.upb.bookstore.model.Book;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

}
