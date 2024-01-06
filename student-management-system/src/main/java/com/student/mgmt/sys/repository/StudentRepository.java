package com.student.mgmt.sys.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.student.mgmt.sys.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
}
