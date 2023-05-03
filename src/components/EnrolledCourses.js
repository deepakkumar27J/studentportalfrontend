import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function EnrolledCourse() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [courseId, setCourseId] = useState('')
  const [core, setCore] = useState('')
  const [credit, setCredit] = useState('')
  const [courseName, setCourseName] = useState('')
  const [description, setDescription] = useState('')
  const [courses, setCourses]=useState([])

  const navigate = useNavigate();
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/homepage`)
  }

  useEffect(()=>{
    const studentId = 11;
    fetch(`http://localhost:8080/course/enrolledCourses/${studentId}`)
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
          </Paper>
      ))}
    <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
    </Paper>
    </Container>
  );
}