import PropTypes from 'prop-types';



function Student(props) {
  return (
    <div className="Student">
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string ,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
Student.defaultProps = {
  name: "Unknown",
  course: "Unknown", 
  age: 0,
  isStudent: false
}

export default Student;