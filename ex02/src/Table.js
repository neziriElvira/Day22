import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}

export default Table;