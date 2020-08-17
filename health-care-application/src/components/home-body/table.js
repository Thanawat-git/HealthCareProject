import React from "react";
import {Table} from 'react-bootstrap'

function table() {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>นางจำปา</td>
            <td>ศรีเมือง</td>
          </tr>
          <tr>
            <td>2</td>
            <td>นางจำปา</td>
            <td>แจ่มจันทร์</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default table;
