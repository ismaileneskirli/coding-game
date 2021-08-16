package io.codinggame.demo.business.abstracts;

import java.util.List;

import io.codinggame.demo.entities.User;

public interface UserService {

    List<User> getAllUsers();

    void addUser(User user);

    User getByUserName(String name);

}
