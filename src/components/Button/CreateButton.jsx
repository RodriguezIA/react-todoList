/* eslint-disable no-unused-vars */

import React from 'react'
import './CreateButton.css'

import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Divider } from '../Divider/Divider'
import { Form } from '../forms/form'

import { CiCirclePlus  } from 'react-icons/ci'
import { useTags } from '../../hooks/Tags'

export const CreateButton = () => {
    const [showModal, setShowModal] = useState(false);
    const { tagList } = useTags()

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const onSubmit = (data) => {
        // Formatear la fecha antes de enviar los datos
        const formattedData = {
            ...data,
            deadline: formatDate(data.deadline)
        };
        console.log(formattedData);
        handleCloseModal();
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const formStructure = [
        {
            label: "task",
            type: 'text',
            validation: { required: 'This field is required' }
        },
        {
            label: 'deadline',
            type: 'date',
            min: new Date().toISOString().split('T')[0]
        },
        {
            label: 'Tags',
            type: "tags",
            options: tagList.map(t => ({value: t.id, label:t.name}))
        }
    ]



    return (
        <>
            <button 
                className='button' 
                id='newtask'
                onClick={handleOpenModal}
            > 
                <CiCirclePlus className='icon'/> 
                New Task
            </button>
            
            {showModal && (
                <Modal>
                    <h2>New Task</h2>
                    <Divider />
                    <Form formStructure={formStructure} onCloseModal={handleCloseModal} onSubmit={onSubmit} />
                </Modal>
            )}
        </>
    )
}