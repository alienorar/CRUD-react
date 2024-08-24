import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GlobalModal = (props) => {
    const { open, toggle, data, setData, update } = props;
    const [form, setForm] = useState({});

    useEffect(() => {
        if (update.id) {
            setForm(update);
        } else {
            setForm({});
        }
    }, [update]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (update.id) {
            const updatedData = data.map((item) =>
                item.id === update.id ? { ...item, ...form } : item
            );
            setData(updatedData);
        } else {
            let payload = { ...form, id: nanoid() };
            setData([...data, payload]);
        }
        toggle(); // Close the modal after saving
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                <h2 className='text-center text-success'>Add Student</h2>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={form.name || ''}
                        placeholder='Name'
                        name='name'
                        className='form-control my-3'
                        required
                    />
                    <input
                        type="number"
                        onChange={handleChange}
                        value={form.age || ''}
                        placeholder='Age'
                        name='age'
                        className='form-control my-3'
                        required
                    />
                    <input
                        type="phone"
                        onChange={handleChange}
                        value={form.phone || ''}
                        placeholder='Phone'
                        name='phone'
                        className='form-control my-3'
                        required
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        value={form.address || ''}
                        placeholder='Address'
                        name='address'
                        className='form-control my-3'
                        required
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-success' type='submit' form='form'>
                    Save
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default GlobalModal;
