import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Course() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [courses, setCourses]=useState([])

  const navigate = useNavigate();
  const handleClick=(e)=>{
    fetch(`http://localhost:8080/course/enrolCourse/${localStorage.getItem('id')}/${localStorage.getItem('courseId')}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
    }).then(async (result)=>{
      if(result.status==200){
        const enrol = await result.json();
        if(enrol.enrol){
          alert('You are already enrolled in this course');
        }
        else {
          alert('Successfully enrolled in course, here is your reference number : '+enrol.reference+' Pay at http:localhost:3001');
          console.log("New Course added", result.status);
        }
      } else {
        alert('Finance Service down, sorry! enrol later.');
      }
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
      {courses.map(course=>
        (
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.courseId}>
          Core:{course.core? " Yes":" No"}<br/>
          Credit:{"   "+course.credit}<br/>
          Name:{"  "+course.courseName}<br/>
          Description:{"  "+course.description}<br/>
          Cost:{"  £"+course.cost}<br/>
          <Button variant="contained" onClick={()=>{
            localStorage.setItem('courseId', course.id)
            handleClick()
          }}>Enrol Course</Button>
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