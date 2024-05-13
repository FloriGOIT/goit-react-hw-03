import css from "./ContactList.module.css"


export function ContactList({listContacts})
{ return (<ul  className={css.listContactsWrap}>
             {listContacts.map((contact, index) => <li key={contact.id}>
                                              <span><b>{index}.</b>{contact.name}: {contact.number}</span>
                                              <button>Delete</button>
                                          </li>)}
          </ul>)}