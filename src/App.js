import './App.css';
import Appbar from './components/Appbar';
import {StudentRegister, UpdateStudent, Student, StudentHome} from './components/Student';
import {Course, CourseDetail} from './components/Course';
import EnrolledCourse from './components/EnrolledCourses';
import Graduation from './components/Graduate';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Routes>
      <Route path='/' element={<Student/>}/>
      <Route path='/courses' element={<Course/>}/>
      <Route path='/enrolledCourse' element={<EnrolledCourse/>}/>
      <Route path='/graduation' element={<Graduation/>}/>
      <Route path='/courseDetail' element={<CourseDetail/>}/>
      {/* <Route path='/viewProfile' element={<Course/>}/> */}
      <Route path='/editProfile' element={<UpdateStudent/>}/>
      <Route path='/register' element={<StudentRegister/>}/>
      <Route path='/homepage' element={<StudentHome/>}/>
    </Routes>
    </div>
  );
}

export default App;
