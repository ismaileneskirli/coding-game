package io.codinggame.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //Lombok getter setter ve constructorları yazmamıza gerek kalmadan çalıştırıyor
@Entity //Pruduct ın veritabanının nesnesi olduğunu belirtir.
@Table(name="questions") // veri tabanında karşılık gelen tablo ismi
@AllArgsConstructor //Argümanlı constructor ları ekler
@NoArgsConstructor //Argümansız constructor ları ekler
public class Question {
	
	    @Id //Sadece primary key kolonuna denk gelen değişkene yazılır
	    @GeneratedValue(strategy = GenerationType.IDENTITY) //Id'nin 1 1 arttığını belirtir
	    @Column(name="question_id") // veri tabanında karşılık gelen kolon ismi
		private int id;
	    
	    //@Column(name="category_id") //Aşağıda category_id kolonuyla joinlediğimiz için bu satırlara gerek kalmadı. 
		//private int categoryId;
	    
	    @Column(name="question_text")
		@NotBlank
		@NotNull
		private String questionText;
	    
	    @Column(name="difficulty_level")
		@NotBlank
		@NotNull
		private int difficultyLevel;
	    
	    @Column(name="category_name")
		@NotBlank
		@NotNull
		private String categoryName;

        @Column(name="correct_answer")
		@NotBlank
		@NotNull
		private String correctAnswer;

    }
