package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
