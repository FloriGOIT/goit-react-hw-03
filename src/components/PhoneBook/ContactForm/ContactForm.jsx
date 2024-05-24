import React from "react";
import css from "./ContactForm.module.css";
import PropTypes from "prop-types";


export class ContactForm extends React.Component
{ state = {name: "", number: ""};

  
  handleInput = (e) => {const {name, value} = e.target;                                
                        this.setState({[name]: value});}
                        
  handleSubmitInput = (e) => {e.preventDefault();
                              let form = e.currentTarget;
                              this.props.onSubmit(this.state)
                              form.reset();}                      
       
  render(){
    return(<form className={css.formWrapper} onSubmit={this.handleSubmitInput}>
              <label htmlFor="nameId"> Name </label>
              <input type="text"
                     name="name"
                     pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                     required id="nameId" onChange={this.handleInput}/>
               
               <label htmlFor="numberId"> Number </label>
               <input type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required id="numberId" onChange={this.handleInput}/>
               <button type="submit" > Add contact</button>
           </form>)
}}

ContactForm.propTypes = {onSubmit: PropTypes.func}