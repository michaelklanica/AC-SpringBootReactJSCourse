import React, { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';
import {
  Table
} from 'antd';

class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
      this.setState({
        students
      });
    }));
  }

  render() {

    const { students } = this.state;

    if (students && students.length) {

      const columns = [
        {
          title: 'Student ID',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'First name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        }
      ];

      return <Table 
        dataSource={students} 
        columns={columns} 
        rowKey='studentId' />;

    }


    return <h1>No Students Found</h1>
  }
}

export default App;
