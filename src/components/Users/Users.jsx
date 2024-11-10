import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "./Users.css"

function Users({ data }) {
  const userColumns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Username', accessor: 'username' },
    { header: 'Avatar', accessor: 'urlavatar' },
    { header: 'Email', accessor: 'mail' },
    { header: 'Birthdate', accessor: 'birthdate' },
    { header: 'Password', accessor: 'password' },
    { header: 'User Status', accessor: 'userstatus' },
  ];

  return (
    <div className="container-sm mt-4">
    <div className="table-responsive">
      <Table striped bordered hover variant="dark" className="table-sm" style={{ borderColor: '#4b0082', borderWidth: '2px' }}>
        <thead style={{ backgroundColor: '#4b0082' }}>
          <tr>
            {userColumns.map((col, index) => (
              <th key={index} style={{ color: '#4b0082' }}>{col.header}</th>
            ))}
            <th style={{ color: '#4b0082' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {userColumns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.accessor === 'urlavatar' ? (
                    <img src={item[col.accessor]} alt="avatar" width="50" height="50" />
                  ) : col.accessor === 'birthdate' ? (
                    new Date(item[col.accessor]).toLocaleDateString()
                  ) : (
                    item[col.accessor]
                  )}
                </td>
              ))}
              <td>
                <div className="d-flex justify-content-center">
                  <Button variant="info" className="me-1">
                    <FaEye />
                  </Button>
                  <Button variant="warning" className="me-1">
                    <FaEdit />
                  </Button>
                  <Button variant="danger">
                    <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);
}

export default Users;
