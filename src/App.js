import React from 'react';
import { Toast } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button worked');
    this.setState({ show: true });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1 className='mb-5'>Add Property Address</h1>
          <form onSubmit={this.handleSubmit}>
            <div className='mb-4'>
              <input
                id='username'
                name='username'
                type='text'
                className='p-1'
              />
            </div>
            <div className='submitButtonContainer '>
              <button className='submitButton btn btn-primary mb-3'>
                Submit
              </button>
            </div>
          </form>
          <div>
            <Toast
              id='toast'
              show={this.state.show}
              onClose={() => this.setState({ show: false })}
              delay={1000}
              // animation={true}
              autohide
              // style={{
              //   position: 'absolute',
              //   top: 10,
              //   right: 10,
              //   width: 300
              // }}
            >
              {/* <Toast.Header>
                <img src='' className='rounded mr-2' alt='' className='mt-3' />
                <strong className='mr-auto text-primary'></strong>
                <small></small>
              </Toast.Header> */}
              <Toast.Body>
                <strong>Your property has been saved</strong>
              </Toast.Body>
            </Toast>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
