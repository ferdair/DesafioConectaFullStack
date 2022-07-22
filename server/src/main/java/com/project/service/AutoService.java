package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Auto;
import com.project.repository.AutoRepository;

@Service
public class AutoService {
	@Autowired
	private AutoRepository autoRepository;

	public Auto insertar(Auto auto) {
		return autoRepository.save(auto);

	}

	public Auto findByPlaca(String placa) {
		return autoRepository.findByPlaca(placa);

	}
}
