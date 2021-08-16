package io.codinggame.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity // this class is a database object.
@Data // create getters and setters
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public int id;

    @Column(name = "name")
    @NotBlank
    @NotNull
    public String name;

    @Column(name = "email")
    @Email
    @NotBlank
    @NotNull
    public String email;

    @Column(name = "password")
    @NotBlank
    @NotNull
    public String password;

    @Column(name = "points")
    public int points;

    @Column(name = "wins")
    public int wins;

    @Column(name = "loses")
    public int loses;
}
