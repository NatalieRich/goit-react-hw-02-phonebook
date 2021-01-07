import s from './Phonebook.module.css'

const Filter = ({ filter, onChange }) => {
    return (
        <>
                <label className={s.labelFilter}> Find contact by name
                     <input
                    type='text'
                    name='filter'
                    value={filter}
                    onChange={onChange}
                    className={s.filter}></input>
                </label>
            </>
    )
}


export default Filter