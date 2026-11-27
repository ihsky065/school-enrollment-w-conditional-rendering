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
                        <option value="">--Select Grade--</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </>
    )
}