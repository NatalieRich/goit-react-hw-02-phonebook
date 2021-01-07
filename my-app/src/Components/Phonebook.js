import s from './Phonebook.module.css'

const Phonebook = ({contacts, deleteContact}) => {
    return (

        <div>
           
        <ul className={s.list}>
            {contacts.map(contact => <li
                key={contact.id}
                className={s.contact}>
                <p className={s.name}>{contact.name}:</p><p>{contact.number}</p>
                <button
                    type='button'
                    onClick={() => deleteContact(contact.id)}
                    className={s.buttonDelete}>
                    Delete</button>
                </li>)}
        </ul>
        </div>
        )
} 



export default Phonebook