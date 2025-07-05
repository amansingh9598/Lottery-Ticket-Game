import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery(props){
    let [ticket, setTicket] = useState(genTicket(props.n));
    const isWinning= props.winCondition(ticket);

    let buyTicket =()=>{
        setTicket(genTicket(props.n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br /><br />
            <button onClick={buyTicket} style={{backgroundColor:"green", color:"white"}}>Buy New Ticket </button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}