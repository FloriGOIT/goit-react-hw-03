import React from "react";
import css from "./ImageSearch.module.css"
import {Searchbar} from "./Searchbar/Searchbar.jsx"
import {ImageGallery} from "./ImageGallery/ImageGallery.jsx"
import ImageGalleryItem from "../ImageSearch/ImageGalleryItem/ImageGalleryItem.jsx"
import {Loader} from "./Loader/Loader.jsx"
import {Button} from "./Button/Button.jsx"
import {Modal} from "./Modal/Modal.jsx"

export default class ImageSearch extends  React.Component
{ state = {site: "",
           itemsHits: null,
           error: null,
           numberItems : 0};


   handleSubmit = (sitePartial) => {this.setState({site: sitePartial});
                                    this.setState({numberItems: 4});}
   handleNewImages = () => {this.setState(prevState => ({numberItems: prevState.numberItems + 4 }))}

   componentDidUpdate = (prevProps, prevState) => 
    { let perPagesite = `${this.state.site}&per_page=${this.state.numberItems}`;
      console.log(perPagesite);
      if(this.state.site !== prevState.site || this.state.numberItems !== prevState.numberItems)
        {fetch(`${perPagesite}`).then((res)=>{ if(!res.ok){throw new Error("There seems to be an issue. Please verify the validity of the site!") }
                                              else{return res.json() }})
                               .then( (data)=>{if(data.hits.length < 1){alert("Please make a valid search!")}
                                               else{this.setState({itemsHits: data.hits, error: null})}} )
                               .catch((error)=>{this.setState({error: error.message})})
        }
    }

   render(){return <div className={css.ImageSearchWrapper}>
                        <Searchbar searcItem={this.handleSubmit} numberItems={this.state.numberItems}/>
                        <ImageGallery>
                              <ImageGalleryItem itemsHits={this.state.itemsHits}/>
                        </ImageGallery>
                        {this.state.site!== "" && this.state.itemsHits!== null && <Button numberItems={this.state.numberItems} addNewItems={this.handleNewImages}/> } 
                       
                        <Loader />
                        <Modal />
                    </div>}}