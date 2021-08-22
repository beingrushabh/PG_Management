import React, { Component } from 'react';
import "./Form.css"
import PgDoc from './PG_Document';
import ReactToPrint from "react-to-print";
class Form extends Component {
    state = { 
        name: "Rushabh Agrawal",
        roomNo: 404,
        floor: 4,
        date: "17-04-2021",
        duration: "15 Days",
        amount: "3000",
        adhaar: "",
        SD: 6000,
        guestAddress:"ewfnrhe"
     }
     onSubmit(e){
         
     }
    render() { 
        console.log(this.state.date)
        return (<div> 
    <form className="AgreeForm">
  <div class="">
    <input type="text" className="form-control" onChange={(e) => {this.setState({name : e.target.value})}} placeholder="Enter Name"/>    
  </div>
  <div class="">
    <input type="date" class="form-control" onChange={(e) => {this.setState({date : e.target.value})}} placeholder="Date"/>
  </div>
  <div class="">
    <input type="number" class="form-control" onChange={(e) => {this.setState({roomNo : e.target.value})}} placeholder="Room No"/>
  </div>
  <div class="">
    <input type="number" class="form-control" onChange={(e) => {this.setState({floor : e.target.value})}} placeholder="Floor"/>
  </div>
  <div class="">
    <input type="" class="form-control" onChange={(e) => {this.setState({duration : e.target.value})}} placeholder="Duration"/>
    <small class="form-text text-muted">Enter it like x Months y Days</small>
  </div>
  <div class="">
    <input type="number" class="form-control" onChange={(e) => {this.setState({amount : e.target.value})}} placeholder="Amount"/>
  </div>
  <div class="">
    <input type="number" class="form-control" onChange={(e) => {this.setState({SD : e.target.value})}} placeholder="Security Deposit"/>
  </div>
  <div class="">
    <input type="number" class="form-control" onChange={(e) => {this.setState({adhaar : e.target.value})}} placeholder="Adhar Number"/>
  </div>
  <div class="">
    <input type="" class="form-control"  onChange={(e) => {this.setState({guestAddress : e.target.value})}} placeholder="Guest Address"/>
    <small class="form-text text-muted">As per Adhaar Card</small>
  </div>
</form>
<ReactToPrint
          trigger={() =>  <button class="btn btn-primary">Print</button>
        }
          content={() =>
            this.componentRef}
        />
 <PgDoc 
name= {this.state.name}
roomNo= {this.state.roomNo}
floor= {this.state.floor}
date= {this.state.date}
duration= {this.state.duration}
amount= {this.state.amount}
guestAddress= {this.state.guestAddress}
adhaar= {this.state.adhaar}
SD={this.state.SD}
ref={el => (this.componentRef = el)}
/>
        </div>);
   }
}
 
export default Form;