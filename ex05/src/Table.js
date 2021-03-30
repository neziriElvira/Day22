import React, { Component } from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th>Lary</th>
                <th>Page</th>
            </tr>
            <tr>
                <th>Ada</th>
                <th>Lovelace</th>
            </tr>
            <tr>
                <th>Alan</th>
                <th>Turing</th>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table;