package io.codinggame.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.codinggame.demo.business.abstracts.QuestionService;
import io.codinggame.demo.dataAccess.abstracts.QuestionDao;
import io.codinggame.demo.entities.Question;

@Service // Bu class servis görevi görecek
public class QuestionManager implements QuestionService{

	public QuestionDao questionDao;


    @Autowired
	public QuestionManager(QuestionDao questionDao) {
		super();
		this.questionDao = questionDao;
	}

    @Override
    public List<Question> getAll() {
        return this.questionDao.findAll();
    }

    @Override
    public void addQuestion(Question question) {
        this.questionDao.save(question);
        
    }

    @Override
    public Question getByCategoryName(String categoryName) {
        return this.questionDao.getByCategoryName(categoryName);
    }

    @Override
    public Question getByDifficultyLevel(int difficultyLevel) {
        return this.questionDao.getByDifficultyLevel(difficultyLevel);
    }

    @Override
    public Question getByCategoryNameAndDifficultyLevel(String categoryName, int difficultyLevel) {
        return this.questionDao.getByCategoryNameAndDifficultyLevel(categoryName, difficultyLevel);
    }

    @Override
    public Question findById(int id) {
        return this.questionDao.findById(id);
    }

  

  



}