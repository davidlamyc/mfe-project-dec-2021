import React, { useState, useEffect } from "react";
import axios from "axios";
import 'antd/dist/antd.css';

import { setHeaderUser } from '@davidlamyc/header';
import { getCurrentUser } from '@davidlamyc/auth';

import { Table, Button } from 'antd';
const { Column } = Table;

export default function Root(props) {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCurrentUser().then(o => console.log(o))

    setUser('Temp User');
    setHeaderUser('SETTING HEADER USER')

    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // console.log(response.data)
        setUsers(response.data)
      })
      .catch(err => console.log("Error fetching users:", err))
  }, [])
  
  const handleHeaderUser = (username) => {
    setHeaderUser(username)
  }

  return <div style={{ margin: '1em' }}>
    <Table dataSource={users} >
      <Column
        title="First Name"
        key="firstName"
        render={(text, record) => (
          <div>{record.name}</div>
        )}
      />
      <Column
        render={(text, record) => {
          return <Button onClick={() => handleHeaderUser(record.username)}>Use</Button>
        }}
      />
    </Table>
  </div>
}
