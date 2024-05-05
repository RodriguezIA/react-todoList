/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form'

export function CreateNewForm (){
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) =>  {
        console.log(data)
    }

    const today = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" name='task' {...register('task')}/>
            </div>

            <div className="form-control">
                <label>Deadline</label>
                <input type='date' name='date' min={today} {...register('date')} />
            </div>

            {/* TODO: implementar la multimedia */}

            {/* TODO: implementar compartir tarea */}


            <div className='form-control'>
                <label></label>
                <button type='submit'>Register</button>
            </div>
        </form>
    )
}