import PropTypes from 'prop-types';
import { CURRENCIES, ItemsQantity, TITLE_MAX_LENGTH } from '../../const';

export default function Item (props) {

  const { 
    title, 
    price, 
    currency_code: currCode, 
    quantity, 
    url, 
    MainImage: {
      url_570xN: imgSrc,
    },
  } = props.itemData;

  const getQantityClassName = () => {
    if (quantity <= ItemsQantity.Low.VALUE) {
      return ItemsQantity.Low.CLASS_NAME
    }
    if (quantity <= ItemsQantity.Medium.VALUE) {
      return ItemsQantity.Medium.CLASS_NAME
    } 
    return ItemsQantity.High.CLASS_NAME
  }

  const getPriceCurrency = () => {
    if (currCode === CURRENCIES.Dollar.NAME) {
      return CURRENCIES.Dollar.SYMBOL + price
    }
    if (currCode === CURRENCIES.Euro.NAME) {
      return CURRENCIES.Euro.SYMBOL + price
    }
    return price + ' ' + currCode
  }

  const getTitleByLength = () => {
    if (title.length > TITLE_MAX_LENGTH) {
      return title.slice(0, TITLE_MAX_LENGTH) + '…'
    }
    return title
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={imgSrc} alt={title}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitleByLength()}</p>
        <p className="item-price">{getPriceCurrency()}</p>
        <p className={getQantityClassName()}>{quantity} left</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  MainImage: PropTypes.shape({
    url_570xN: PropTypes.string
  }),
  
}
