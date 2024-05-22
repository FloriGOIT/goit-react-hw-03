import css from "./ContactList.module.css";
import PropTypes from "prop-types";




export function ContactList({allContacts, toFilter,onClickDelete})
{let filteredList = allContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()));
  
  return(<ul className={css.contactList}>
            {toFilter === "" && allContacts.map((contactItem, index, array) => <li key={contactItem.id} >
                                                <span><b>{index+1}.</b> {contactItem.name}:  {contactItem.number}</span>
                                                <button type="button" onClick={() => onClickDelete(contactItem.id)}>Delete</button>
                                            </li> )}
            {toFilter !== "" && filteredList.map((contactItem, index, array) => <li key={contactItem.id} >
                                                <span><b>{index+1}.</b> {contactItem.name}:  {contactItem.number}</span>
                                                <button type="button" onClick={() => onClickDelete(contactItem.id)}>Delete</button>
                                            </li> )}                                
        </ul>)}

ContactList.propTypes = {allContacts:PropTypes.array, toFilter:PropTypes.string, onClickDelete: PropTypes.func}