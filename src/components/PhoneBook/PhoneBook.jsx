import React from "react";

import {ContactForm} from "./ContactForm/ContactForm.jsx"
import {Filter} from "./Filter/Filter.jsx"
import {ContactList} from "./ContactList/ContactList.jsx"
import { nanoid } from "nanoid";



export  class PhoneBook extends React.Component 
{
  state = {contacts: [],
           filter: ""}


  
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

  handleFilterContactList = (inputFilter) => {this.setState({filter: inputFilter});
                                                console.log(this.state.filter)}                         
  
  handleDelete = (id) => {this.setState({contacts: this.state.contacts.filter(contact =>contact.id !== id )});}

  componentDidMount(){let mountContacts = localStorage.getItem("localContacts");
                      let stringMountContacts = JSON.parse(mountContacts);
                      this.setState({contacts: stringMountContacts})}


  componentDidUpdate(){let getContacts = this.state.contacts;
                       let jsonGetContacts = JSON.stringify(getContacts);
                       localStorage.setItem("localContacts",jsonGetContacts);}


  render(){return ( 
          <div className="phonebook">
              <h1> Phonebook </h1>
              <ContactForm onSubmit={this.addNewContact} />
              <h2 style={{marginTop: "50px"}}>Contacts</h2>
              <Filter valueFilter={this.handleFilterContactList}/>
              <ContactList allContacts={this.state.contacts} toFilter={this.state.filter} onClickDelete={this.handleDelete}/>
          </div>
)}};
