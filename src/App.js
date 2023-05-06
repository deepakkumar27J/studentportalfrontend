import './App.css';
import Appbar from './components/Appbar';
import {StudentRegister, UpdateStudent, Student, StudentHome, ViewProfile} from './components/Student';
import {Course, CourseDetail} from './components/Course';
import EnrolledCourse from './components/EnrolledCourses';
import Graduation from './components/Graduate';
import { Routes, Route } from 'react-router-dom';
import LoggedInAppbar from './components/LoggedInAppbar';
import {AllDues, PaidDues, UnpaidDues} from './components/Dues'

function App() {
  return (
    <div className="App">
    {/* <Appbar/> */}
    <Routes>
      <Route path='/' element={[<Appbar/>,<Student/>]}/>
      <Route path='/courses' element={[<LoggedInAppbar/>,<Course/>]}/>
      <Route path='/enrolledCourse' element={[<LoggedInAppbar/>,<EnrolledCourse/>]}/>
      <Route path='/graduation' element={[<LoggedInAppbar/>,<Graduation/>]}/>
      <Route path='/courseDetail' element={[<LoggedInAppbar/>,<CourseDetail/>]}/>
      {/* <Route path='/viewProfile' element={<Course/>}/> */}
      <Route path='/viewProfile' element={[<LoggedInAppbar/>,<ViewProfile/>]}/>
      <Route path='/editProfile' element={[<LoggedInAppbar/>,<UpdateStudent/>]}/>
      <Route path='/register' element={<StudentRegister/>}/>
      <Route path='/homepage' element={[<LoggedInAppbar/>,<StudentHome/>]}/>
      <Route path='/allInvoices' element={[<LoggedInAppbar/>,<AllDues/>]}/>
      <Route path='/paidInvoices' element={[<LoggedInAppbar/>,<PaidDues/>]}/>
      <Route path='/unpaidInvoices' element={[<LoggedInAppbar/>,<UnpaidDues/>]}/>
    </Routes>
    </div>
  );
}

export default App;
