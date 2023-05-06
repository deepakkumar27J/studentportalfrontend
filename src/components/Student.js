import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Course, CourseDetail } from './Course';
import { Link, useNavigate } from 'react-router-dom';
import { Square } from '@mui/icons-material';

export function Student() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [emailId,setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [students, setStudents]=useState([])

  const navigate = useNavigate();
  const handleClick=async (e)=>{
    e.preventDefault()
    const student={emailId, password}
    console.log(student);
    await fetch("http://localhost:8080/student/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(async (result)=>{
      if(result.status ==200){
        const user = await result.json();
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('emailId', user.emailId);
        localStorage.setItem('id', user.id);
        localStorage.setItem('phoneNumber', user.phoneNumber);
        localStorage.setItem('cgpa', user.cgpa);
        localStorage.setItem('yearIntake', user.yearIntake);
        localStorage.setItem('dob', new Date(user.dob));
        navigate(`/homepage`)
      }
      else 
        alert('Invalid Credentials')
    })
  }

  const handleRegister=(e)=>{
    e.preventDefault()
    navigate(`/register`)
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Login</u></h1>
      <TextField id="outlined-basic" label="Email or Username" variant="outlined" fullWidth 
      value={emailId}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" type='password' autoComplete='current-password' variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Login</Button>
      <br></br>
      <Link variant="out-lined" onClick={handleRegister}>Create Account</Link>
    </Box>
    </Paper>
    </Container>
  );
}


export function StudentHome() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [emailId,setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [students, setStudents]=useState([])

  const navigate = useNavigate();

  const handleViewCourses=(e)=>{
    e.preventDefault()
    navigate(`/courses`)
  }
  const handleREnrolledCourses=(e)=>{
    e.preventDefault()
    navigate(`/enrolledCourse`)
  }
  const handleGraduation=(e)=>{
    e.preventDefault()
    navigate(`/graduation`)
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    > 
      
      <h1 style={{color:"gray"}}><u>Dashboard</u></h1>
      <br></br>
      <br></br>
      <br></br>
      <h2>Welcome {localStorage.getItem('firstName')+' '+localStorage.getItem('lastName')}</h2>
      <br></br>
      <h3>This is your homepage, further links for other portals are given below.</h3>
      <br></br>
      <h3>Go to <a class='btn btn-link'  href='http://localhost:3002'>Finance Portal </a> to find and pay invoices</h3>
      <br></br>
      <h3>Go to <a class='btn btn-link'  href='http://localhost:3003'>Library Portal </a> to find books or return books</h3>
      <br></br>
      <Paper square style={paperstyle} >
      <Button variant="contained" size='large' onClick={handleViewCourses}>View Courses</Button>
      </Paper>
      <Paper square style={paperstyle} >
      <Button variant="contained" color='success' size='large' onClick={handleREnrolledCourses}>View Enrolled Courses</Button>
      </Paper>
      <Paper square style={paperstyle} >
      <Button variant="contained" color='error' size='large' onClick={handleGraduation}>View Graduation</Button>
      </Paper>
    </Box>
    </Paper>
    </Container>
  );
}

export function StudentRegister() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [emailId,setEmail]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [yearIntake,setYearIntake]=useState('')
  const [dob,setDob]=useState('')
  const[password, setPassword]=useState('')

  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const student={emailId, password, firstName, lastName, phoneNumber, yearIntake, dob}
    console.log(student.dob);
    fetch("http://localhost:8080/student/create",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then((result)=>{
      if(result.status ==200)
        navigate(`/homepage`)
      else 
        alert('Email already in use')
    })
  }
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Register</u></h1>
      <TextField id="outlined-basic" label="Email or Username" variant="outlined" fullWidth 
      value={emailId}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Birth" 
        value={dob}
        onChange={(e)=>setDob(e)}/>
      </DemoContainer>
    </LocalizationProvider>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth
      value={phoneNumber}
      onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <TextField id="outlined-basic" label="Year Intake" variant="outlined" fullWidth
      value={yearIntake}
      onChange={(e)=>setYearIntake(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" type='password' autoComplete='current-password' variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Register</Button>
    </Box>
    </Paper>
    </Container>
  );
}

export function UpdateStudent() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')

  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const _student={
      id: localStorage.getItem('id'),
      firstName: firstName,
      lastName: lastName
    }
    fetch("http://localhost:8080/student/updateProfile",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(_student)
    }).then(()=>{
      navigate(`/viewProfile`)
    })
  }
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/viewProfile`)
  }
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Edit Profile</u></h1>
      <TextField id="updateFirstName" label="First Name" variant="outlined" fullWidth
      type='text'
      name='First Name'
      InputLabelProps={{shrink:true}}
      // value={student.firstName || ''}
      onChange={(e)=>{
        localStorage.setItem('firstName', e.target.value);
        setFirstName(e.target.value)}}
      />
      <TextField label="Last Name" fullWidth
      // value={student.lastName || ''}
      onChange={(e)=>{
        localStorage.setItem('lastName', e.target.value);
        setLastName(e.target.value)
      }}
      />
      <Button variant="contained" onClick={handleClick}>Update</Button>
    </Box>
    </Paper>
    <Button variant="contained" onClick={handleBack}>Back</Button>
    </Container>
  );
}

export function ViewProfile () {

  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const navigate = useNavigate();
  const handleEdit=(e)=>{
    e.preventDefault()
    navigate(`/editProfile`)
  }
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/homepage`)
  }
  return (
    <Container>
    <h1>Profile</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}}>
          First Name:{"  "+localStorage.getItem('firstName')}<br/>
          Last Name:{"  "+localStorage.getItem('lastName')}<br/>
          Email/Username:{"  "+localStorage.getItem('emailId')}<br/>
          Phone Number:{"  "+localStorage.getItem('phoneNumber')}<br/>
          CGPA:{"  "+localStorage.getItem('cgpa')}<br/>
          Year Intake:{"  "+localStorage.getItem('yearIntake')}<br/>
          Date of Birth:{"  "+localStorage.getItem('dob')}<br/>

          <Button variant="contained" onClick={handleEdit}>Edit Profile</Button>
          </Paper>
      }
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}
