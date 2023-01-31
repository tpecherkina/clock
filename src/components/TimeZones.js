import React, {useState} from 'react';

export default function TimeZones ({addTimeZone}) {
  let [name, setName] = useState('');
  let [timeOffset, setTimeOffset] = useState('')
 
  const changeName = (evt) => {
    setName(evt.target.value);
  }
 
  const changeTimeZone = (evt) => {
    setTimeOffset(evt.target.value);
  }


  const handleSubmit = evt => {
    evt.preventDefault();
    addTimeZone(name, timeOffset);
    setName('');
    setTimeOffset('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <label >Название</label>
      <input value={name} onChange={changeName}></input>
      <label>Смещение относительно UTC</label>
      <input type="number" min="-12" max ="14" value={timeOffset} onChange={changeTimeZone}>
      </input>
      <button>Добавить</button>  
    </form>
  );
}