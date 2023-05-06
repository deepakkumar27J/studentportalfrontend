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
  const [duesClear, setDuesClear]=useState(Boolean)

  const navigate = useNavigate();
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/homepage`)
  }
  const handleDues=(e)=>{
    e.preventDefault()
    navigate(`/unpaidInvoices`)
  }

  useEffect(()=>{
    fetch(`http://localhost:8081/invoice/dues/${localStorage.getItem('emailId')}`,{
      method:"GET",
      headers:{"Content-Type":"application/json"},
      // body:JSON.stringify(course)
    })
    .then(function(response) {
      return response.text();
    }).then(function(data) {
      setDuesClear(data);
      console.log("du--- ",duesClear);
    });
  },[])
  return (
    <Container>
    <h1>Graduation</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={duesClear}>
         { duesClear == "true" ? <h2>Yes, you can graduate!!</h2>:
         <h2>You are unable to graduate, please clear <Button variant="contained" size='large' onClick={handleDues}>Dues</Button> first.</h2>
         }
        </Paper>
      }
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}