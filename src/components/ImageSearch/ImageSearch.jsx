import React from "react";
import css from "./ImageSearch.module.css"
import {Searchbar} from "./Searchbar/Searchbar.jsx"
import {ImageGallery} from "./ImageGallery/ImageGallery.jsx"
import ImageGalleryItem from "../ImageSearch/ImageGalleryItem/ImageGalleryItem.jsx"
import {Loader} from "./Loader/Loader.jsx"
import {Button} from "./Button/Button.jsx"
import {Modal} from "./Modal/Modal.jsx"

export class ImageSearch extends  React.Component
{ state = {search: "",
           site: "",
           itemsHits: null,
           error: null,
           array : [{id:1, name: "Florentina", being: "imi constientizez inteligenta"},
{id:2, name: "Flori", being: "Imi constientizez frumusetea"},
{id:3, name: "Florance", being: "Materializez ce-mi propun"},
{id:4, name: "Draga de mine", being: "Imi constientizez abundenta"},
{id:5, name: "Minunata creatie", being: "Constientizez lucrul cu inteligenta din mine"}]
          };
  

   handleSearchInput = (input) => {this.setState({search: input});}
   handleSubmit = (siteFull) => {this.setState({site: siteFull});}
   

   componentDidUpdate = (prevProps, prevstate) => 
    {
      if(this.state.site !== "" && this.state.site !== prevstate.site)
        {fetch(this.state.site).then((res)=>{ if(!res.ok){throw new Error("There seems to be an issue. Please verify the validity of the site!") }
                                              else{return res.json() }})
                               .then( (data)=>{this.setState({itemsHits: data.hits, error: null})} )
                               .catch((error)=>{this.setState({error: error.message})})
        }
    }                                   

   render(){return <div className={css.ImageSearchWrapper}>
                        <Searchbar searchInput={this.handleSearchInput} searcItem={this.handleSubmit}/>
                        <ImageGallery>
                            <ImageGalleryItem itemsHits={this.state.itemsHits}/>
                        </ImageGallery>
                        <Loader />  
                        <Button /> 
                        <Modal />
                    </div>}}