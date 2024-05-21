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
           statusUploadig: "pending"};


   handleSubmit = (sitePartial) => {this.setState({site: sitePartial, numberItems: 4, statusUploadig: "loading"})}
   handleNewImages = () => {this.setState(prevState => ({numberItems: prevState.numberItems + 4, statusUploadig: "loading" }))}
   fetching = () => {let perPagesite = `${this.state.site}&per_page=${this.state.numberItems}`; console.log(perPagesite);
                    fetch(`${perPagesite}`).then((res)=>{ if(!res.ok){throw new Error("There seems to be an issue. Please verify the validity of the site!") }
                                                          else{return res.json() }})
                                           .then( (data)=>{if(data.hits.length < 1){alert("Please make a valid search!")}
                                                          else{this.setState({itemsHits: data.hits, error: null, statusUploadig: "resolved"})}} )
                                           .catch((error)=>{this.setState({error: error.message, statusUploadig: "rejected"})})}


   componentDidMount = () => {this.setState({statusUploadig: "resolved"})}
   componentDidUpdate = (prevProps, prevState) => 
    {if(this.state.site !== prevState.site || this.state.numberItems !== prevState.numberItems){this.setState({statusUploadig: "pending"}); this.fetching()}; }
    

   render(){const {itemsHits, statusUploadig, site} = this.state
             return <div className={css.ImageSearchWrapper}>
                        <Searchbar searcItem={this.handleSubmit} numberItems={this.state.numberItems}/>
                        <ImageGallery>
                              <ImageGalleryItem itemsHits={itemsHits}/>
                        </ImageGallery>
                        
                        {site!== "" && itemsHits!== null && statusUploadig === "resolved" 
                        && <Button numberItems={this.state.numberItems} addNewItems={this.handleNewImages}/> } 
                        {statusUploadig === "pending" && <Loader />}

                        <Modal />
                    </div>}}