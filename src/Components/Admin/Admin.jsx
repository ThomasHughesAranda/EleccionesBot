import './Admin.css';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const Admin = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const columns = [   
        {
            name: 'ID',
            selector: row => row.messageid,
            sortable: true,
        },
        {
            name: 'Correo',
            selector: row => row.emailuser,
            sortable: true,
        },
        {
            name: 'Fecha',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Mensaje',
            selector: row => row.messageuser,
            sortable: true,
            cell: row => (
                <div className="message-cell" title={row.messageuser}>{row.messageuser}</div>
            )
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/messagesUsers');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter(item =>
                item.messageuser.toLowerCase().includes(search.toLowerCase()) ||
                item.emailuser.toLowerCase().includes(search.toLowerCase()) ||
                item.messageid.toString().includes(search.toLowerCase()) ||
                item.date.toString().includes(search.toLowerCase())
            )
        );
    }, [data, search]);

    const handleSearch = event => {
        setSearch(event.target.value);
    };
    return (
        <div>
            <DataTable
               title={<>
               <div className="header">
                <strong>Mensajes</strong>
                    <Form.Control
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={handleSearch}
                        className="search-input" 
                    />
                </div>
                </>}
                columns={columns}
                data={filteredData}
                paginationPerPage={20}
                fixedHeader
            />
        </div>
    );
};

export default Admin;