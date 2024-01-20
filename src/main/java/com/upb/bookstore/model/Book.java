package com.upb.bookstore.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Data
@Entity
public class Book {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idAuthor")
	
	private long id;
	private String author;
	private String picture;
	private double price;
	private String language;
}
