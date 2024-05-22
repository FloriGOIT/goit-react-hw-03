import css from "./ContactList.module.css";
import PropTypes from "prop-types";


export function ContactList({allContacts, toFilter, onClickDelete})
{ const filteredList =  allContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()))
  
    return (<ul  className={css.listContactsWrap}>
            {toFilter === "" && allContacts.map((contact, index) => <li key={contact.id}>
                                                    <span><b>{index + 1}.</b>{contact.name}: {contact.number}</span>
                                                    <button type="button" onClick = {() => onClickDelete(contact.id)}>Delete</button>
                                                 </li>)}  
            {toFilter !== "" && filteredList.map((contact, index) => <li key={contact.id}>
                                                    <span><b>{index + 1}.</b>{contact.name}: {contact.number}</span>
                                                    <button type="button" onClick = {() => onClickDelete(contact.id)}>Delete</button>
                                                 </li>)}                                             
         </ul>)
}

ContactList.propTypes = {allContacts:PropTypes.array, toFilter:PropTypes.string, onClickDelete: PropTypes.func}