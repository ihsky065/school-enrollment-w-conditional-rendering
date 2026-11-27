import { Form } from 'react-bootstrap';
import { useContext } from 'react';
import { GradeContext } from '../contexts/GradeContext';

export default function EnrollmentStatus() {
    const {selectedGrade, setSelectedGrade} = useContext(GradeContext);
    return(
            <>
                <h1  className='my-3'>School Enrollment</h1>
                <Form>
                    <Form.Group>
                        <Form.Select
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        >
                        </Form.Select>
                    </Form.Group>
                </Form>
            </>
    )
}