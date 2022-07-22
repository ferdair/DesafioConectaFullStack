package com.project.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Auto;
import com.project.response.ResponseHandler;
import com.project.service.AutoService;

@RestController
@RequestMapping("/api/auto")
@CrossOrigin(origins = "http://localhost:1337", maxAge = 3600)
public class AutoController {

	@Autowired
	private AutoService autoService;

	@PostMapping("/create")
	public ResponseEntity<Object> insertar(@Validated @RequestBody Auto auto) {

		try {
			Pattern pattern = Pattern.compile("^[A-Z]{3}-\\d{3,4}");
			Matcher matcher = pattern.matcher(auto.getPlaca());
			boolean matchFound = matcher.matches();

			if (matchFound) {
				Auto newAuto = autoService.insertar(auto);
				return ResponseHandler.generateResponse("Successfully added data!", HttpStatus.OK, newAuto);
			} else {
				return ResponseHandler.generateResponse("La placa debe estar en formato AAA-0123 o AAA-123",
						HttpStatus.UNPROCESSABLE_ENTITY, null);
			}

		} catch (Exception e) {
			return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.MULTI_STATUS, null);
		}

	}

	@GetMapping("/buscar")
	public ResponseEntity<Object> buscar(@RequestParam() String placa, @RequestParam() String fechaHora) {

		try {
			Auto auto = autoService.findByPlaca(placa);
			LocalDateTime fechaCirculacion = LocalDateTime.parse(fechaHora);
			LocalDateTime fechaHoy = LocalDateTime.now();

			if (fechaCirculacion.isBefore(fechaHoy)) {
				return ResponseHandler.generateResponse("La fecha enviada no debe ser anterior a la fecha actual",
						HttpStatus.UNPROCESSABLE_ENTITY, null);

			}

			return ResponseHandler.generateResponse(auto.consultarCirculacion(fechaCirculacion), HttpStatus.OK, auto);
		} catch (Exception e) {
			return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.MULTI_STATUS, null);
		}

	}

}
