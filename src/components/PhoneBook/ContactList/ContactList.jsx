import css from "./ContactList.module.css";
import PropTypes from "prop-types"


export function ContactList({toFilter, onClickDelete})
{  let mountContacts = localStorage.getItem("localContacts");
   let stringMountContacts = JSON.parse(mountContacts);

   const filteredList =  stringMountContacts.filter(contact => contact.name.toLowerCase().includes(toFilter.toLowerCase()))
   const contactsToDisplay = (toFilter === "") ? stringMountContacts : filteredList;

  return (<ul className={css.listContactsWrap}>
               {contactsToDisplay.map((contact, index) => (<li key={contact.id}>
                                                               <span><b>{index + 1}.</b> {contact.name}: {contact.number}</span>
                                                               <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                                                          </li> ))}
         </ul>);
}

ContactList.propTypes = {toFilter: PropTypes.string, onClickDelete: PropTypes.func}