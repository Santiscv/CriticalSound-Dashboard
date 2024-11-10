import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import "./Songs.css"

function Songs({ data, genres }) {
  const songColumns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
    { header: 'Song Image', accessor: 'urlSong' },
    { header: 'Description', accessor: 'description' },
    { header: 'Genre', accessor: 'genre' },
  ];

  return (
    <div className="container-sm mt-4">
      <div className="table-responsive">
        <Table striped bordered hover variant="dark" className="table-sm" style={{ borderColor: '#4b0082', borderWidth: '2px' }}>
          <thead style={{ backgroundColor: '#4b0082' }}>
            <tr>
              {songColumns.map((col, index) => (
                <th key={index} style={{ color: '#4b0082' }}>{col.header}</th>
              ))}
              <th style={{ color: '#4b0082' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {songColumns.map((col, colIndex) => (
                  <td key={colIndex}>
                   {col.accessor === 'urlSong' ? (
                    <img src={item[col.accessor]} alt="image-song" width="50" height="50" />
                    ) : col.accessor === 'genre' ? (
                      <select value={item[col.accessor]}>
                        {genres.map((genre) => (
                          <option key={genre.id} value={genre.id}>
                            {genre.name}
                          </option>
                        ))}
                      </select>
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

export default Songs;
