import TimeZone from './TimeZone';
import TimeZones from './TimeZones';
import { useState } from 'react';
import moment from 'moment';

function TimeZoneSide() {
    let [items, setItems] = useState([]);

    const addTimeZone = (name, timeOffset) => {
        let findIndex = items.findIndex(itm => itm.itemId === name)
        if(!name) {
            alert("Заполните поле Название")
          } else {
          items.push({
            itemId: name,
            itemName: name,
            itemTime: moment().utcOffset(timeOffset*60).format("HH:mm:ss"),
            itemOffset: timeOffset
          })
          setItems([...items])
          }  
       }
       
       function deleteItem(itemId) {
        const filter = items.filter((el) => el.itemId !== itemId);
        setItems([...filter]);  
       }

     return (
        <div className="widget">
    <TimeZones addTimeZone={addTimeZone}></TimeZones>
    <div className="timeZones_list">
     {items.map((item)=> {
     return <TimeZone key={item.itemId} item={item} deleteItem={deleteItem}></TimeZone>
     })
      }
    </div>
      </div>
    );


}

export default TimeZoneSide;