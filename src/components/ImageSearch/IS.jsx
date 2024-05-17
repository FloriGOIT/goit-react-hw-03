import React from "react";
import css from "./ImageSearch.module.css"


export class ISearch extends React.Component
{
 state = {search:""}
 
 handleInputSearh = (e) => {let inputEvent = e.target.value;
                            console.log(inputEvent);
                            this.setState({search: inputEvent})}

 handleSubmit = (e) => {e.preventDefault();}
 

 render(){return(
 <div style={{width : "70%"}}>
    <header className={css.searchbarWrapper}>
        <form onSubmit={this.handleSubmit}>
            <button type="submit">🔍</button>
            <input  type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" onChange={this.handleInputSearh}/>
        </form>
    </header>

    <div className={css.listWrapper}>
        <ul className={css.listComponent}>
          <li className={css.galleryItem} key="2"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="3"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem}  key="1"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="4"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="5"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="6"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="7"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="8"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="9"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="10"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="11"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
          <li className={css.galleryItem} key="12"><img src="https://pixabay.com/get/g8018cdfcedce186be0e88c5fdb2a049965d1c811cf88694f0c4fa54cb706b2c1c5d2f97a4b2e280d95eff0370bc0932e8e3232ec56b53a189975eca177002b2a_640.jpg" alt="Florentina Vachente"/></li>
        </ul>
    </div>

    <div className={css.loadButtonWrapper}>
        <button className={css.loadButton}>Load more</button>
    </div>

    <div className={css.end}>Zhe End</div>
 </div>

)}}