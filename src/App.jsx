import EnrollmentStatus from './pages/EnrollmentStatus';
import { useState, useContext} from 'react';

export default function App () {
  const [selectedGrade, setSelectedGrade] = useState('');

  return (
    <>
    <GradeContext.Provider value={{selectedGrade, setSelectedGrade}}>
      <Container>
      <EnrollmentStatus></EnrollmentStatus>
      </Container>
    </GradeContext.Provider>
    </>
  )
}