package io.codinggame.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.codinggame.demo.entities.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    public User getByName(String name);
}
