package io.codinggame.demo.dataAccess.abstracts;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.codinggame.demo.entities.Question;

@Repository
public interface QuestionDao extends JpaRepository<Question, Integer>{
	
	Question getByCategoryName(String categoryName);
	//getBy olduğunda aslında bizim yerimize bir ProductName li where sorgusu yazıyor.
	//SELECT * FROM products WHERE product_name = abc
	
	Question getByDifficultyLevel(int difficultyLevel);

	//@Query("From Question where questions.id=:id")
    Question findById(int id);

	Question getByCategoryNameAndDifficultyLevel(String categoryName, int difficultyLevel);	





	

}
