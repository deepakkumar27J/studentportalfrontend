import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function Course() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [courseId, setCourseId] = useState('')
  const [core, setCore] = useState('')
  const [credit, setCredit] = useState('')
  const [courseName, setCourseName] = useState('')
  const [description, setDescription] = useState('')
  const [courses, setCourses]=useState([])

  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const course={courseId, core, credit, courseName, description}
    console.log(course);
    const _studentId = 11;
    const _courseId = 4;
    fetch(`http://localhost:8080/course/enrolCourse/${_studentId}/${_courseId}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(course)
    }).then((result)=>{
      console.log("New Course added", result.status);
    })
  }
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/homepage`)
  }

  useEffect(()=>{
    fetch("http://localhost:8080/course/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setCourses(result);
    }
    )
  },[])
  return (
    <Container>
    <h1>All Courses</h1>
    <Paper elevation={3} style={paperstyle}>
      {courses.map(course=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.courseId}>
          Core:{course.core? " Yes":" No"}<br/>
          Credit:{"   "+course.credit}<br/>
          Name:{"  "+course.courseName}<br/>
          Description:{"  "+course.description}<br/>
          <Button variant="contained" onClick={handleClick}>Enrol Course</Button>
          </Paper>
      ))}
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}

export function CourseDetail() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [courseId, setCourseId] = useState('')
  const [core, setCore] = useState('')
  const [credit, setCredit] = useState('')
  const [courseName, setCourseName] = useState('')
  const [description, setDescription] = useState('')
  const [course, setCourse]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const studentId = 11;
    const courseId = 1;
    fetch(`http://localhost:8080/course/enrolCourse/${studentId}/${courseId}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      // body:JSON.stringify(course)
    }).then(()=>{
      console.log("New Course enrolled")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/course/getCourse"+"?id="+3)
    .then(res=>res.json())
    .then((result)=>{
      setCourse(result);
    }
    )
  },{})
  return (
    <Container>
    <h1>Course Detail</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.courseId}>
          Core:{course.core? " Yes":" No"}<br/>
          Credit:{"   "+course.credit}<br/>
          Name:{"  "+course.courseName}<br/>
          Description:{"  "+course.description}<br/>
          <Button variant="contained" onClick={handleClick}>Enrol</Button>
        </Paper>
        
      }

    </Paper>
    </Container>
  );
}