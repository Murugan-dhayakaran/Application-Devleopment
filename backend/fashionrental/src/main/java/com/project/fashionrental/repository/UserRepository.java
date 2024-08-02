package com.project.fashionrental.repository;


import com.project.fashionrental.model.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    
}

