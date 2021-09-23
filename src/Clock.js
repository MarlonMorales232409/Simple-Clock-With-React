import React, {useState, useEffect} from 'react';
import './styles/main.css';

function Clock(props){
  return(
    <h1 className="clock__hour">{props.hour}</h1>
  )
}

export default function SetTimer(){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [timer, setTimer] = useState(false);
    

    useEffect(() => {
        let interval;
        if(timer){
          interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString()) 
          }, 1000); 
        }else{
          clearInterval(interval)
        }

        return () => {
          clearInterval(interval)
        }
    }, [timer])

    return(
        <div>
            {timer && <Clock className="main__clock" hour={hour}/>}
            <button className="clock__button" onClick={()=> setTimer(true)}>Iniciar</button>
            <button className="clock__button" onClick={()=> setTimer(false)}>Detener</button>
        </div>
    )
}