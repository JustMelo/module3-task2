import Item from "../item/Item";

export default function Listing (props) {

  const getItems = () => props.items.map((elem) => elem.state === 'active' ? <Item itemData={elem} key={elem.listing_id}/> : false);

  console.log(props.items);

  return (
    <div className="item-list">
      {getItems()}
    </div>
  )
}

Listing.defaultProps = {
  items: []
}