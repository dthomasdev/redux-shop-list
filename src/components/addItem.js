import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      item: "" 
    }
  
  }


//Overwrites state when an item is entered

  changeHandler(e){
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }

// creates an id for each item

listId = 0;

// passes items to state in app.js to be rendered as items

  submitHandler(e){
    e.preventDefault();
    if (this.state.item === "") {
      return
    }
    this.props.additem(this.listId,this.state.item);
    this.setState({
      id: 0,
      item: "" 
    })
    this.listId ++;
  }

  render () {
  return (
    
      <Card>
        <Card.Body>

          <Form onSubmit = {(e) => {this.submitHandler(e)}}>

          <input 
            value = {this.state.item} 
            type = "text" name = "item" 
            placeholder="Description" 
            onChange = { (e) => this.changeHandler(e) }>
          </input>

          <Button variant = "warning" type = "submit">Add</Button>

          </Form>

        </Card.Body>
      </ Card>
    );
  }
}

export default Add;