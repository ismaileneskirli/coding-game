package io.codinggame.demo.business.abstracts;

import java.util.List;

import io.codinggame.demo.entities.Question;

public interface QuestionService {
	List<Question> getAll();	
	
	void addQuestion(Question question);
	
	Question getByCategoryName(String categoryName);	
	
	Question getByDifficultyLevel(int difficultyLevel);
	
	Question findById(int id);
	
	Question getByCategoryNameAndDifficultyLevel(String categoryName, int difficultyLevel);	


	

}