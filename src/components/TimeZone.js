import Clock from "./Clock";

export default function TimeZone({item, deleteItem}) {
   const {itemName, itemId, itemOffset} = item;
  
   const handleDelete = (event) => {
     deleteItem(event.target.id);
   }

    return (
        <div >
            <div>{itemName}</div>
            <Clock itemOffset={itemOffset} />
            <button type='button' id={itemId} onClick={handleDelete}>X</button>
        </div>
    );
}