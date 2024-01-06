package com.student.mgmt.sys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.student.mgmt.sys.entity.Student;
import com.student.mgmt.sys.repository.StudentRepository;

@SpringBootApplication
public class StudentManagementSystemApplication implements CommandLineRunner{
	public static void main(String[] args) {
		SpringApplication.run(StudentManagementSystemApplication.class, args);				
	}
	@Autowired
	private StudentRepository studentRepository;
	@Override
	public void run(String... args) throws Exception {
		/*
		Student student1 = new Student("abc","xyz","abc@gmail.com");
		Student student2 = new Student("def","pqr","def@gmail.com");
		studentRepository.save(student1);
		studentRepository.save(student2);
		*/
	}

}
