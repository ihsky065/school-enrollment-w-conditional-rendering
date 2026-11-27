import EnrollmentStatus from './pages/EnrollmentStatus';
import { useState, useContext} from 'react';

export default function App () {
  const [selectedGrade, setSelectedGrade] = useState('');

  return (
    <>
      <EnrollmentStatus></EnrollmentStatus>
    </>
  )
}