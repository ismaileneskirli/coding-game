package io.codinggame.demo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.codinggame.demo.business.abstracts.UserService;
import io.codinggame.demo.entities.User;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UsersController {

    private UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        super();
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public List<User> getAll() {
        return this.userService.getAllUsers();
    }

    @PostMapping(value = "/add")
    public void add(@Valid @RequestBody User user) {
        this.userService.addUser(user);
    }

    @GetMapping("/getByName")
    public User getByName(@RequestParam String name) {
        return this.userService.getByUserName(name);
    }
}
