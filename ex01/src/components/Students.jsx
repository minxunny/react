import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
const Students = () => {
    const [students, setStudents] = useState([
        {no:100, name:'홍길동', address:'인천 부평구', phone:'010-1010-2020'},
        {no:101, name:'심청이', address:'서울 강동구', phone:'010-3030-4040'},
        {no:102, name:'강감찬', address:'인천 계양구', phone:'010-5050-6060'},
    ]);

    return (
    <div className='mt-5'>
        <h1>학생목록</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td>학생번호</td>
                    <td>학생이름</td>
                    <td>학생주소</td>
                    <td>학생전화</td>
                </tr>
            </thead>
            <tbody>
                {students.map(s=>
                    <tr>
                        <td>{s.no}</td>
                        <td>{s.name}</td>
                        <td>{s.address}</td>
                        <td>{s.phone}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    </div>
    )
}

export default Students