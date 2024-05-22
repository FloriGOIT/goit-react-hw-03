import css from "./ContactList.module.css";



export function ContactList({allContacts, toFilter, onClickDelete})
{ 
   const filteredList =  allContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()))
   const contactsToDisplay = (toFilter === "") ? allContacts : filteredList;

  return (<ul className={css.listContactsWrap}>
               {contactsToDisplay.map((contact, index) => (<li key={contact.id}>
                                                               <span><b>{index + 1}.</b> {contact.name}: {contact.number}</span>
                                                               <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                                                          </li> ))}
         </ul>);
}

