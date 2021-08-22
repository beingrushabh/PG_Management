import React, { Component } from 'react';
import "./PG_Doc.css"

class PgDoc extends Component {
    state = {  
        

    }
    render() {
        console.log(this.props.date) 
        return (<div className="pgdoc">
            <div><spam>Rent Agreement </spam>
            <spam className="headDate">{this.props.date} </spam>
            </div>
            <h5>BETWEEN</h5>
            <spam><b>Yogesh Agrawal (Owner)</b></spam>
            <spam> And </spam>
            <spam><b>{this.props.name}</b></spam>
            <br/><br/>
           <spam>Re: One room, Room No. ____{this.props.roomNo}___</spam> 
           
           <p>AGREEMENT made on {this.props.date} BETWEEN __<b>Mr. Yogesh Agrawal</b>__ hereinafter referred to as "the Owner" of the One Part AND __<b>{this.props.name}</b> __ hereinafter referred to as "the Guest" of the Second Part;
</p>
            <p>WHEREAS the Owner is seized and possessed of and is occupying Room No.__<b>{this.props.roomNo}</b>__ on the floor no. __{this.props.floor}__ of the building named as __<b>Swastik</b>__ situated at __10/A Gordhan Park Society, Usmanpura, Ahmedabad__</p>
            <p>AND WHEREAS the Paying Guest have requested the Owner to allow them use of one bedroom in the building  in the aforesaid premises for their own use only on a temporary basis on the terms and conditions hereinafter written.</p>
            <spam>NOW THIS AGREEMENT WITNESSETH:</spam>
            <ol className="agrlist">
                <li>&emsp; &emsp; The Owner hereby agrees to permit the Paying Guest to use one bedroom in double sharing in the aforesaid premises being Room No.__{this.props.roomNo}__ in __swastik__ situated at __10/A Gordhan Park Society, usmanpura, Ahmedabad__ together with the use of the attached bathroom, on paying guest basis.</li>
                <li>&emsp; &emsp; This Paying Guest Agreement shall be for a period of __<b>{this.props.duration}</b>__ only commencing from __<b>{this.props.date}</b>__</li>
                <li>&emsp; &emsp; The Paying Guest shall pay an amount of __<b>Rs {this.props.amount}</b>__ for his stay. The charges shall include the stay at Room and Electric Bill only.</li>
                <li>&emsp; &emsp; The Paying Guest shall pay Security Deposit of <b>Rs {this.props.SD}</b>, which will be returned over the end of this agreement with deductions if applicable.</li>
                <li>&emsp; &emsp; The Paying Guest hereby specifically confirm and agree that they have no right whatsoever to the said premises nor shall claim to be tenant/sub-tenant or licensees nor shall claim any other right whatsoever in or to the said premises.</li>
                <li>&emsp; &emsp; They Paying Guest may use the passages in the building for access to the room provided that no disturbance whatsoever is caused to the use of passages and other portions of the building by the Owner and his servants and others.</li>
                <li>&emsp; &emsp; The Paying Guest shall not cause any disturbance at any time and may permit guests or any outsider to enter the flat only with the permission of the Owner.</li>
                <li>&emsp; &emsp; In the event that the Paying Guest misuse any of the facilities in the flat or causes any disturbance or delays in making payment of the Paying Guest charges, this Agreement shall stand terminated forthwith and it is hereby specifically agreed and confirmed that the Owner shall be entitled to enter the room allocated to the Paying Guest for the time being and to remove all the belongings of the Paying Guest and dispose of them.</li>
                <li>&emsp; &emsp; This Agreement shall stand terminated immediately upon the expiry of the period mentioned hereinabove.</li>
                <li>&emsp; &emsp; The Paying Guest shall be responsible for any damage caused by them or by any other outsider who has entered the flat through them to the said flat and to any of the furniture, fixtures and equipment therein, reasonable wear and tear excepted.</li>
                <li>&emsp; &emsp; Premises will be locked after 11 pm. Paying Guest should return before that, will be allowed to enter late on special conditions, keeping the owner well informed in advance.</li>
                <li>&emsp; &emsp; Cooking , use of  Non-Vegetarian food is not allowed inside the room, premises. It's just to make sure no one ever feels uncomfortable around.</li>
                <li>&emsp; &emsp; The rights granted hereunder is strictly for the use of the Paying-Guest during the term of the Agreement as bare Paying-Guest only. The Paying-Guest shall not induct any other person in the said bed and/or room or directly or indirectly allow any other person to use or occupy the said bed or any part thereof for any purpose. It is expressly agreed that the rights granted to the Paying-Guest to use the said bed is purely personal to the Paying-Guest and shall in no case exclude the Owner or its agents, servants, representatives etc. from looking after the said room</li>
                <li>&emsp; &emsp; The Owner shall deliver one set of duplicate keys of the room  to enable the Paying-Guest to enter and use of the said room. However, the possession of the said room physically and judicial along with the original set of keys shall always remain with the Owner.</li>
                <li>&emsp; &emsp; The paying guest id advised not to keep any ornaments, cash or expensive belongings in the room. The owner , managing team will not be in any way responsible for any loss , theft for any of your belongings .</li>
                <li>&emsp; &emsp; The Owner shall deliver one set of duplicate keys of the room  to enable the Paying-Guest to enter and use of the said room. However, the possession of the said room physically and judicial along with the original set of keys shall always remain with the Owner.</li>
            </ol>

            <spam>IN WITNESS WHEREOF the parties hereto have hereunto set and subscribed their respective hands the day and year first hereinabove written.</spam>
            <br/>
            <spam>SIGNED AND DELIVERED by the within- </spam>
            <div className="sign">
                <b>Yogesh Agrawal (Owner)</b>
                    <div className="guest"><b>{this.props.name} (Guest)</b>, <spam><i>Adhar No. {this.props.adhaar}</i></spam> <br/>{this.props.guestAddress}</div>
            </div>
        </div>  );
    }
}
 
export default PgDoc;