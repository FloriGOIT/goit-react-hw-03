import React from "react";
import css from "../PhoneBook/PhoneBook.module.css"
import {ContactForm} from "./ContactForm/ContactForm.jsx"
import {Filter} from "./Filter/Filter.jsx"
import {ContactList} from "./ContactList/ContactList.jsx"
import { nanoid } from "nanoid";



export  class PhoneBook extends React.Component 
{
  state = {contacts: [{id:132111}],
           filter: "",
           isVisible: true}

//functions
  addNewContact = ({name, number}) => {function upper1stLetter(string){let stringToArray = string.split(" ");
                                                                        let array1stletterUpper = stringToArray.map((word)=> {return word.charAt(0).toUpperCase() + word.slice(1)});
                                                                        return array1stletterUpper.join(" ");}
                                       let costumizedName = upper1stLetter(name);
                                       let duplicate = this.state.contacts.some( contact => {return costumizedName.toLowerCase() === contact.name.toLowerCase()})
                                       if(duplicate){alert(`${costumizedName} is already in your PhoneBook.`)}
                                       else{let newContact = {id: nanoid(), name: costumizedName, number: number};
                                       let updatedContactList = [...this.state.contacts];
                                       updatedContactList.push(newContact);
                                       this.setState({contacts: updatedContactList});}}
  handleFilterContactList = (inputFilter) => {this.setState({filter: inputFilter}); console.log(this.state.filter)}                         
  handleDelete = (id) => {this.setState({contacts: this.state.contacts.filter(contact =>contact.id !== id )});}
  phonebookRemove = (e) => {let tag = e.target.id; console.log(tag); if(tag === "closeingElement"){this.setState({isVisible: false})}}

//lifecycle
 
//JSX
  render(){const {contacts,filter, isVisible} = this.state;

          return ( 
          isVisible && (<div className={css.phonebook}>
                            <button className={css.phonebookRemove} id="closeingElement" onClick={this.phonebookRemove}>❌</button>
                            <h1> Phonebook </h1>
                            <ContactForm onSubmit={this.addNewContact} />
                            <h2 style={{marginTop: "50px"}}>Contacts</h2>
                            <Filter valueFilter={this.handleFilterContactList}/>
                            <ContactList allContacts={contacts} toFilter={filter} onClickDelete={this.handleDelete}/>
                        </div>)
)}};

