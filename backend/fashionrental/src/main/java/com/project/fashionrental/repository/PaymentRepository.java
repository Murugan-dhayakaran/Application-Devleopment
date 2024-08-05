package com.project.fashionrental.repository;

import com.project.fashionrental.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment,Long> {

    
}