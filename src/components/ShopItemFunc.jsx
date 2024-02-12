
export default function ShopItemFunc(props) {

  
    return (
    <>
    <div className="main-content">
      <h2>{props.brand}</h2>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <div className="description">
        {props.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{props.currency} {(Math.round(props.price* 100) / 100).toFixed(2)} </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    </>
  )

}