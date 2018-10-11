import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (<div>Select a book - Redux don't allow a null value</div>);
    }
    return (
      <div className="bookDetail">
        <h3>Detail for: </h3>
        <div>
          <h4>
            {this.props.book.title}
          </h4>
          <h5>
            {this.props.book.pages}
          </h5>
        </div>
        Book Detail!
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      book: state.activeBook         //This shit is in reducers/index.js
    };
}


export default connect(mapStateToProps)(BookDetail);



// Application state is different to component state
//Component state is: this.state.someth in class { constructor() {}} or this.setState({})
//
