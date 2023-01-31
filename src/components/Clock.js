import { useEffect, useState } from 'react';
import moment from 'moment';

export default function Clock({itemOffset}) {
 let [timeZone, setTimeZone] = useState('');

function refreshClock() {
  setTimeZone(moment().utcOffset(itemOffset*60).format("HH:mm:ss"))
}
  useEffect(() => {
    const timer =  setInterval(refreshClock, 1000); 
    return () => {
      clearInterval(timer);
    };
});
    
  
  return(
    <div className="time">{timeZone}</div>
  )



}