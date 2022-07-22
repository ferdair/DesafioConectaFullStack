package com.project.repository;

import com.project.entity.Auto;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutoRepository extends JpaRepository<Auto, Integer> {
	
	Auto findByPlaca(String placa);

}
