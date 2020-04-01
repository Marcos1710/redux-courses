import React, { useState } from "react";
import "./style.css";

import { useSelector, useDispatch } from 'react-redux'

export default function CourseList() {
  const [course, setCourse] = useState([])
  
  const courses = useSelector(state => state.courses, [])
  const dispatch = useDispatch()

  function addCourse(e) {
    e.preventDefault()
    dispatch({ type: 'ADD_COURSE', text: course })
    setCourse([])
  }

  return (
    <section>
      <form onSubmit={addCourse}>
        <input 
          type="text" 
          placeholder="Insert new Course" 
          value={course}
          onChange={e => setCourse(e.target.value)}   
        />
        <button type="submit">Novo Curso</button>
      </form>
      <ul>
        {courses.map(course => 
          <li key={course.id}>
            {course.complete ? <s>{course.text}</s> : course.text}
            <div>
              <button onClick={() => dispatch({ type: 'TOGGLE_COURSE', id: course.id })}>Concluir</button>
              <button onClick={() => dispatch({ type: 'REMOVE_COURSE', id: course.id })}>Remover</button>
            </div>
          </li> 
        )}
      </ul>
    </section>
  );
}