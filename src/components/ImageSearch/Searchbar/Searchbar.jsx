import css from "../ImageSearch.module.css"
import React from "react";

export class  Searchbar extends React.Component
{ state = {search: ""}

handleSearchInput = (input) => {this.setState({search: input})}

handleSubmitInput = (e) => {e.preventDefault();
                            let sitePartial = `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&page=1&q=`;
                            let input = e.currentTarget.elements.input.value;
                            sitePartial = sitePartial + input;
                            this.props.searcItem(sitePartial);}


  render()
  {
    return (
      <header className={css.searchbarWrapper}>
        <form onSubmit={this.handleSubmitInput}>
          <button type="submit">🔍</button>
          <input  type="text"
                  name="input"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos" onChange={this.handleSearchInput}/>
        </form>
      </header>
    )
}
  
                                    
  }