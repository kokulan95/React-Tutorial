import React from 'react';
import { todoList } from '../data/todos.js'; // Adjust path as needed
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoRow ({item}) {

    function showSummary(){
        alert(item.summary);

    }

    return (
        <tr>
            <td>{item.person}</td>
            <td>{item.todo}</td>
            <td>{item.deadline}</td>
            <td>
                {item.done ? (
                    <span className="badge bg-success">Done</span>
                ) : (
                    <span className="badge bg-warning text-dark">Pending</span>
                )}
            </td>
            <td>
                <button className="btn btn-info btn-sm" onClick={showSummary}>
                    View Summary
                </button>
            </td>
        </tr>
    );


}

function TodoList (){
    return (
        <div className="container mt-5">
            <h2 className="mb-4">To-Do List</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Person</th>
                    <th>Task</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {
                    todoList
                    .filter(item => !item.done)    // only tasks where done is false
                    .map((item, index) => (
                        <TodoRow key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
