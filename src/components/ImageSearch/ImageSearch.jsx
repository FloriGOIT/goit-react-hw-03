import React from "react";
import css from "./ImageSearch.module.css"
import {Searchbar} from "./Searchbar/Searchbar.jsx"
import {ImageGallery} from "./ImageGallery/ImageGallery.jsx"
import {ImageGalleryItem} from "./ImageGalleryItem/ImageGalleryItem.jsx"
import {Loader} from "./Loader/Loader.jsx"
import {Button} from "./Button/Button.jsx"
import {Modal} from "./Modal/Modal.jsx"

export class ImageSearch extends  React.Component
{render(){return <div className={css.ImageSearchWrapper}>
                    <Searchbar />  
                    <ImageGallery />  
                    <ImageGalleryItem />  
                    <Loader />  
                    <Button /> 
                    <Modal />
                 </div>}}