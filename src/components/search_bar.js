import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super (props);

    this.state = {
      term: ''
    };
  }
  /*--------------------------------------------------------------*/
  /* Out side the constructor usr this.setState. Never use ouside the constructor 'this.state.term = e,target.value' //BAD!!!
  /*--------------------------------------------------------------*/
   render() {
     // return <input onChange={this.onInputChange} />;
     // return <input onChange={ e => console.log(e.target.value) }/>;
     return (
       <div className="search-bar">
         <h5>YouTube Search</h5>
          <input
            placeholder="input value"
            value={this.state.term}
            onChange={ e => this.onInputChange(e.target.value)}/>
          <h4>Value of the input: </h4> {this.state.term}
       </div>
     );
     // this.setState({ term: e.target.value})   <!--This is for onChange={e =>}-->
   } //reference is Ok dont equal anything; just this.state.term
   onInputChange(term) {
     // console.log(e.target.value);
     this.setState({term});
     this.props.onSearchTermChange(term);

   }
}

// const SearchBar = () => {
//   return <input/>;
// };

export default SearchBar

/*--------------------------------------------------------------*/
/* All JS class  has a special function call constructor.
This function is the first and only  function  called automatically whenever a new  instance (a fact, cite, yeu cau, vi du duoc dua ra)
/*--------------------------------------------------------------*/

/* Super: (Vietnamese)
  Super la mot method cho phep goi constructor from the extends when we declare extend class.

/*--------------------------------------------------------------*/
/*--------------------------------------------------------------*/
