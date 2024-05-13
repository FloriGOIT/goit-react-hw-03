import React from "react"
import css from "./ContactForm.module.css"

export class ContactForm extends React.Component
{render(){
    return(<form className={css.formWrapper}>
              <label htmlFor="nameId"> Name </label>
              <input type="text"
                     name="name"
                     pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                     required id="nameId"/>
               
               <label htmlFor="numberId"> Number </label>
               <input type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required id="numberId"/>
               <button type="submit"> Add contact</button>
           </form>)
}}