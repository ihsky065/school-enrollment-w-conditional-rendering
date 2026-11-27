import EnrollmentStatus from './pages/EnrollmentStatus';
import { useState, useContext} from 'react';
import { GradeContext } from './contexts/GradeContext';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App () {
  const [selectedGrade, setSelectedGrade] = useState('');

  return (
    <>
    <GradeContext.Provider value={{selectedGrade, setSelectedGrade}}>
      <Container>
      <EnrollmentStatus></EnrollmentStatus>
      <CardSelected ></CardSelected>
      </Container>
    </GradeContext.Provider>
    </>
  )
}

function CardSelected () {  
  const { selectedGrade } = useContext(GradeContext);

  const gradeDetails = {
    '1' : {tutitonFee:'$1,000', enrollmentStatus: 'Enrollment Open ✅'},
    '2' : {tutitonFee:'$1,200', enrollmentStatus: 'Enrollment Closed ❌'},
    '3' : {tutitonFee:'$1,500', enrollmentStatus: 'Enrollment Open ✅'},
  };

  const details = gradeDetails[selectedGrade];

  return (
    <>
    <div>
      {selectedGrade && (
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>Grade {selectedGrade}</Card.Title>
            <Card.Text>{details.tutitonFee}</Card.Text>
            <Card.Text>{details.enrollmentStatus}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
    </>
  )
}