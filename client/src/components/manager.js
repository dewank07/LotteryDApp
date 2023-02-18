import React , {useState, useEffect} from "react";
import "./manager.css";

const manager = ({state}) => {

    const [account,setAccount] = useState("");
    const [cbalance,setbalance] = useState("");
    const [lwinner,setLwinner] = useState("No winner yet");

    useEffect(()=>{
        const getaccount = async() => {
            const {web3} =state;
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAccount(accounts[0]);
        }
        state.web3 && getaccount();
    },[state,state.web3]);

    return<>
    </>

};

export default manager;