import PropTypes from 'prop-types';
import { CURRENCIES, QantityValue, TITLE_MAX_LENGTH } from '../../const';

export default function Item (props) {

  const {title, price, currency_code, quantity, url, MainImage} = props.itemData;

  const imgSrc = MainImage.url_570xN;

  const getQantityClassName = () => {
    if (quantity <= QantityValue.LOW) {
      return 'item-quantity level-low'
    }
    if (quantity <= QantityValue.MEDIUM) {
      return 'item-quantity level-medium'
    } 
    return 'item-quantity level-high'
  }

  const getPriceCurrency = () => {
    if (currency_code === CURRENCIES.Dollar.NAME) {
      return CURRENCIES.Dollar.SYMBOL + price
    }
    if (currency_code === CURRENCIES.Euro.NAME) {
      return CURRENCIES.Euro.SYMBOL + price
    }
    return price + ' ' + currency_code
  }

  const getTitleByLength = () => {
    if (title.length > TITLE_MAX_LENGTH) {
      return title.slice(0, TITLE_MAX_LENGTH) + '…'
    }
    return title
  }
    
  console.log(props);

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
  url_570xN: PropTypes.string
}
