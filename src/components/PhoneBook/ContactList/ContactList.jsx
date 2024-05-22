import css from "./ContactList.module.css";



export function ContactList({allContacts, toFilter, onClickDelete})
{  let array = [{id: 132111}]
   if(allContacts !== array){ return <p>No contacts available.</p>}
   else {const filteredList =  allContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()))
         const contactsToDisplay = (toFilter === "") ? allContacts : filteredList;

  return (<ul className={css.listContactsWrap}>
               {contactsToDisplay.map((contact, index) => (<li key={contact.id}>
                                                               <span><b>{index + 1}.</b> {contact.name}: {contact.number}</span>
                                                               <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                                                          </li> ))}
         </ul>);
}}

