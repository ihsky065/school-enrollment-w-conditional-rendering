import { Form } from 'react-bootstrap';
import { useContext } from 'react';
import { GradeContext } from '../contexts/GradeContext';

export default function EnrollmentStatus() {
    const {selectedGrade, setSelectedGrade} = useContext(GradeContext);
    
}