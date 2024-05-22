import React from "react";
import css from "./ImageSearch.module.css"
import {Searchbar} from "./Searchbar/Searchbar.jsx"
import {ImageGallery} from "./ImageGallery/ImageGallery.jsx"
import ImageGalleryItem from "../ImageSearch/ImageGalleryItem/ImageGalleryItem.jsx"
import {Button} from "./Button/Button.jsx"
import {Modal} from "./Modal/Modal.jsx"
import {Loader} from "./Loader/Loader.jsx"

export default class ImageSearch extends  React.Component
{ state = {site: "",
           itemsHits: null,
           error: null,
           numberItems : 0,
           statusUploadig: "pending",
           largeImageURL: ""};


   handleSubmit = (sitePartial) => {if(this.state.site !== sitePartial)this.setState({site: sitePartial, numberItems: 12, statusUploadig: "loading"})};
   handleNewImages = () => {this.setState(prevState => ({numberItems: prevState.numberItems + 12, statusUploadig: "loading" })) };
   handleLargeImage = (largeImage) => {this.setState({largeImageURL: largeImage}); console.log(largeImage)};
   handleClose = (tagName) => {if(tagName === "DIV"){this.setState({largeImageURL: ""})}};
   
   fetching = () => {let perPagesite = `${this.state.site}&per_page=${this.state.numberItems}`; console.log(perPagesite);
                    fetch(`${perPagesite}`).then((res)=>{ if(!res.ok){throw new Error("There seems to be an issue. Please verify the validity of the site!") }
                                                          else{return res.json() }})
                                           .then( (data)=>{if(data.hits.length < 1){this.setState({statusUploadig: "rejected"}); alert("Please make a valid search!")}
                                                          else{let newdata = data.hits;
                                                               let arrayNewData = newdata.map(({id, tags, webformatURL, largeImageURL}) => {return {id, tags, webformatURL, largeImageURL}}); 
                                                               this.setState({itemsHits: arrayNewData, error: null, statusUploadig: "resolved"})}} )
                                           .catch((error)=>{this.setState({error: error.message, statusUploadig: "rejected"})})}

   componentDidMount = () => {this.setState({statusUploadig: "resolved"})}
   componentDidUpdate = (prevProps, prevState) => 
    {if(this.state.site !== prevState.site || this.state.numberItems !== prevState.numberItems){this.setState({statusUploadig: "pending"}); this.fetching()};}
    
   render(){const {itemsHits, statusUploadig, site, largeImageURL} = this.state
             return <div className={css.ImageSearchWrapper}>
                        <Searchbar searcItem={this.handleSubmit} numberItems={this.state.numberItems}/>
                        <ImageGallery>
                              <ImageGalleryItem itemsHits={itemsHits} openLargeImage={this.handleLargeImage}/>
                        </ImageGallery>
                        
                        {site!== "" && itemsHits!== null && statusUploadig === "resolved" 
                        && <Button addNewItems={this.handleNewImages}/> } 
                        {statusUploadig === "pending" && <Loader />}

                        {largeImageURL!== "" &&  <Modal largeImage={largeImageURL} closeImg={this.handleClose}/>}
                    </div>}}

