package com.joshuapok.FinanceTracker.repository;

import com.joshuapok.FinanceTracker.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
