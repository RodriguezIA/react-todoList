/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { useTags } from '../../hooks/Tags'
import CreatableSelect from 'react-select/creatable';


export const Form = ({ formStructure, onCloseModal, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    useTags()

    const renderInputField = (field) => {
        switch (field.type) {
            case 'text':
                return <input type="text" {...register(field.label, field.validation)} />;
            case 'date':
                return <input type="date" min={field.min} {...register(field.label, field.validation)} />;
            case 'tags':
                return (
                    <CreatableSelect isMulti options={field.options} {...register(field.label)}/>
                );
            // Agregar más casos según los tipos de campo que necesites manejar
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formStructure.map(field => (
                <div  key={field.label} className='form-control'>
                    <label>{field.label}</label>
                    {renderInputField(field)}
                    {errors[field.label] && <span>{errors[field.label].message}</span>}
                </div>
            ))}

            <div className='form-control'>
                <label></label>
                <button type='submit'>Register</button>
                <button type='button' onClick={onCloseModal}>Close</button>
            </div>
        </form>
    );
};
