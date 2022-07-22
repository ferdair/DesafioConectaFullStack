package com.project.entity;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Auto")
public class Auto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(unique = true)
	private String placa;
	private String color;
	private String modelo;
	private String chasis;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getChasis() {
		return chasis;
	}

	public void setChasis(String chasis) {
		this.chasis = chasis;
	}

	public char obtenerUltimoDigitoPlaca() {
		return getPlaca().charAt(placa.length() - 1);

	}

	public boolean verificarHorario(LocalDateTime date) {
		LocalTime inicialManana = LocalTime.parse("06:00:00");
		LocalTime finalManana = LocalTime.parse("09:30:00");

		LocalTime inicialTarde = LocalTime.parse("16:00:00");
		LocalTime finalFinal = LocalTime.parse("21:00:00");

		LocalTime horaEnviada = date.toLocalTime();

		
		if ((horaEnviada.isAfter(inicialManana) && horaEnviada.isBefore(finalManana))
				|| (horaEnviada.isAfter(inicialTarde) && horaEnviada.isBefore(finalFinal))) {
			return true;
		} else {
			return false;
		}

	}

	public String consultarCirculacion(LocalDateTime fecha) {
		
		char ultimoDigito = obtenerUltimoDigitoPlaca();
		Locale locale = new Locale("es", "ES");
		String dia = fecha.getDayOfWeek().getDisplayName(TextStyle.FULL, locale);

		switch (dia) {
		case "lunes":
			if ((ultimoDigito == '1' || ultimoDigito == '2') && verificarHorario(fecha)) {
				return "No circula el Lunes "+fecha;
			} else {
				return "Si circula Lunes "+fecha;
			}
		case "martes":
			if ((ultimoDigito == '3' || ultimoDigito == '4') && verificarHorario(fecha)) {
				return "No circula Martes "+fecha;
			} else {
				return "Si circula Martes "+fecha;
			}
		case "miércoles":
			if ((ultimoDigito == '5' || ultimoDigito == '6') && verificarHorario(fecha)) {
				return "No circula Miércoles "+fecha;
			} else {
				return "Si circula Miércoles "+fecha;
			}
		case "jueves":
			if ((ultimoDigito == '7' || ultimoDigito == '8') && verificarHorario(fecha)) {
				return "No circula Jueves "+fecha;
			} else {
				return "Si circula Jueves "+fecha;
			}

		case "viernes":
			if ((ultimoDigito == '9' || ultimoDigito == '0') && verificarHorario(fecha)) {
				return "No circula Viernes "+fecha;
			} else {
				return "Si circula Viernes "+fecha;
			}
		default:
			return "Si circula "+fecha;

		}

	}

}
