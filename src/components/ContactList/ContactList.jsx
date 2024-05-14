import css from "./ContactList.module.css"


export function ContactList({allContacts, toFilter, onClickDelete})
{ let filteredList = allContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()))
  
    return (<ul  className={css.listContactsWrap}>
            {toFilter === "" && allContacts.map((contact, index) => <li key={contact.id}>
                                                    <span><b>{index + 1}.</b>{contact.name}: {contact.number}</span>
                                                    <button onClick = {() => onClickDelete(contact.id)}>Delete</button>
                                                 </li>)}  
            {toFilter !== "" && filteredList.map((contact, index) => <li key={contact.id}>
                                                    <span><b>{index + 1}.</b>{contact.name}: {contact.number}</span>
                                                    <button onClick = {() => onClickDelete(contact.id)}>Delete</button>
                                                 </li>)}                                             
         </ul>)
}