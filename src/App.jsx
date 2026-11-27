import EnrollmentStatus from './pages/EnrollmentStatus';
import { useState, useContext} from 'react';

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
        
          </Card.Body>
        </Card>
      )}
    </div>
    </>
  )
}