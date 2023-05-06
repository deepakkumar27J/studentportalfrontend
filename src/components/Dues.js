import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function AllDues() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [dues, setDues]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/homepage`)
    }
    const handleAll=(e)=>{
        e.preventDefault()
        navigate(`/allInvoices`)
      }
      const handlePaid=(e)=>{
        e.preventDefault()
        navigate(`/paidInvoices`)
      }
      const handleUnpaid=(e)=>{
        e.preventDefault()
        navigate(`/unpaidInvoices`)
      }
  
    useEffect(()=>{
      fetch(`http://localhost:8081/invoice/allinvoice/${localStorage.getItem('emailId')}`)
      .then(res=>res.json())
      .then((result)=>{
        setDues(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>All Invoices</h1>
      <Paper elevation={3} style={paperstyle}>
        {dues.map(invoice=>
          (
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={invoice.id}>
            Reference:{invoice.reference}<br/>
            Amount:{"   "+invoice.amount}<br/>
            Due Date:{"  "+invoice.dueDate}<br/>
            Status:{"  "+invoice.Status}<br/>
            Type:{"  "+invoice.types}<br/>
            </Paper>
        ))}
        <Button variant="contained" size='large' onClick={handleAll}>All</Button>
        <Button variant="contained" size='large' onClick={handlePaid}>Paid</Button>
        <Button variant="contained" size='large' onClick={handleUnpaid}>Unpaid</Button>
        <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
  
      </Paper>
      </Container>
    );
}

export function PaidDues() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [dues, setDues]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/homepage`)
    }
    const handleAll=(e)=>{
        e.preventDefault()
        navigate(`/allInvoices`)
      }
      const handlePaid=(e)=>{
        e.preventDefault()
        navigate(`/paidInvoices`)
      }
      const handleUnpaid=(e)=>{
        e.preventDefault()
        navigate(`/unpaidInvoices`)
      }
  
    useEffect(()=>{
      fetch(`http://localhost:8081/invoice/paid/${localStorage.getItem('emailId')}`)
      .then(res=>res.json())
      .then((result)=>{
        setDues(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>Paid Invoices</h1>
      <Paper elevation={3} style={paperstyle}>
        {dues.map(invoice=>
          (
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={invoice.id}>
            Reference:{invoice.reference}<br/>
            Amount:{"   "+invoice.amount}<br/>
            Due Date:{"  "+invoice.dueDate}<br/>
            Status:{"  "+invoice.Status}<br/>
            Type:{"  "+invoice.types}<br/>
            </Paper>
        ))}
        <Button variant="contained" size='large' onClick={handleAll}>All</Button>
        <Button variant="contained" size='large' onClick={handlePaid}>Paid</Button>
        <Button variant="contained" size='large' onClick={handleUnpaid}>Unpaid</Button>
        <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
  
      </Paper>
      </Container>
    );
}

export function UnpaidDues() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [dues, setDues]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/homepage`)
    }
    const handleAll=(e)=>{
        e.preventDefault()
        navigate(`/allInvoices`)
      }
      const handlePaid=(e)=>{
        e.preventDefault()
        navigate(`/paidInvoices`)
      }
      const handleUnpaid=(e)=>{
        e.preventDefault()
        navigate(`/unpaidInvoices`)
      }
  
    useEffect(()=>{
      fetch(`http://localhost:8081/invoice/unpaid/${localStorage.getItem('emailId')}`)
      .then(res=>res.json())
      .then((result)=>{
        setDues(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>Unpaid Invoices</h1>
      <h3>Please pay these unpaid invoices at <a class='btn btn-link'  href='http://localhost:3002'>Finance Portal</a></h3>
      <Paper elevation={3} style={paperstyle}>
        {dues.map(invoice=>
          (
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={invoice.id}>
            Reference:{invoice.reference}<br/>
            Amount:{"   "+invoice.amount}<br/>
            Due Date:{"  "+invoice.dueDate}<br/>
            Status:{"  "+invoice.Status}<br/>
            Type:{"  "+invoice.types}<br/>
            </Paper>
        ))}
        <Button variant="contained" size='large' onClick={handleAll}>All</Button>
        <Button variant="contained" size='large' onClick={handlePaid}>Paid</Button>
        <Button variant="contained" size='large' onClick={handleUnpaid}>Unpaid</Button>
        <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
  
      </Paper>
      </Container>
    );
}