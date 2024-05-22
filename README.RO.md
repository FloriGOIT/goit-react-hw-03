 componentDidMount(){let mountContacts = localStorage.getItem("localContacts");
                      let stringMountContacts = JSON.parse(mountContacts);
                      this.setState({contacts: stringMountContacts})}
  componentDidUpdate(){let getContacts = this.state.contacts;
                       let jsonGetContacts = JSON.stringify(getContacts);
                       localStorage.setItem("localContacts",jsonGetContacts);}
          