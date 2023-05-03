import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link, useNavigate } from 'react-router-dom';

export default function Graduation() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [duesClear, setDuesClear]=useState([])

  const navigate = useNavigate();
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/homepage`)
  }

  useEffect(()=>{
    fetch(`http://localhost:8080/student/graduate?id=${11}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      // body:JSON.stringify(course)
    })
    .then((result)=>{
      setDuesClear(result);
    }
    )
  },[])
  return (
    <Container>
    <h1>Graduation</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={duesClear}>
         { duesClear? <h2>Yes, you can graduate!!</h2>:
         <h2>You are unable to graduate, please clear dues first.</h2>
         }
        </Paper>
      }
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}