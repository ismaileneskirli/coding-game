package io.codinggame.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.codinggame.demo.business.abstracts.QuestionService;
import io.codinggame.demo.entities.Question;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin
public class QuestionsController {

    private QuestionService questionService;

    @Autowired
    public QuestionsController(QuestionService questionService){
        super();
        this.questionService=questionService;
    }

    @GetMapping("/getAll")
    public List<Question> getAll() {
        return this.questionService.getAll();
    }

    @PostMapping(value = "/addQuestion")
    public void add(@RequestBody Question question) {
        this.questionService.addQuestion(question);
    }

    @GetMapping("/getByDifficulty")
    public Question getByDifficultyLevel(@RequestParam int difficultyLevel) {
        return this.questionService.getByDifficultyLevel(difficultyLevel);
    }

    @GetMapping("/getByCategoryName")
    public Question getByCategoryName(@RequestParam String categoryName) {
        return this.questionService.getByCategoryName(categoryName);
    }

    @GetMapping("/getByCategoryNameAndDifficultyLevel")
    public Question getByCategoryNameAndDifficultyLevel(@RequestParam("categoryName") String categoryName, @RequestParam("difficultyLevel") int difficultyLevel) {
        return this.questionService.getByCategoryNameAndDifficultyLevel(categoryName, difficultyLevel);
    }

    @GetMapping("/getById")
    public Question findById(@RequestParam int id) {
        return this.questionService.findById(id);
    }

    
}
