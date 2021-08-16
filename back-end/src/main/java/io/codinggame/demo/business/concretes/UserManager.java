package io.codinggame.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.codinggame.demo.business.abstracts.UserService;
import io.codinggame.demo.dataAccess.abstracts.UserDao;
import io.codinggame.demo.entities.User;

@Service
public class UserManager implements UserService {

    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        super();
        this.userDao = userDao;
    }

    @Override
    public List<User> getAllUsers() {
        return this.userDao.findAll();
    }

    @Override
    public void addUser(User user) {
        this.userDao.save(user);

    }

    @Override
    public User getByUserName(String name) {
        return this.userDao.getByName(name);
    }

}
