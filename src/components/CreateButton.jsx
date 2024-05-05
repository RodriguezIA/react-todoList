/* eslint-disable no-unused-vars */

import React from 'react'
import './CreateButton.css'
import { CiCirclePlus  } from 'react-icons/ci'
import { useState } from 'react'
import { Modal } from './Modal/Modal'
import { Divider } from './Divider/Divider'
import { CreateNewForm } from './forms/CreateNew'

export const CreateButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

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
                    <CreateNewForm />
                    <button onClick={handleCloseModal}>Close</button>
                </Modal>
            )}
        </>
    )
}