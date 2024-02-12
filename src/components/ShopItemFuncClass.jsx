import { Component } from "react" 

export default class ShopItemFuncClass extends Component {

  render () {
    
    const propsItem = this.props.item;
    console.log(propsItem)
    return (
      <>
      <div className="main-content">
        <h2>{propsItem.brand}</h2>
        <h1>{propsItem.title}</h1>
        <h3>{propsItem.description}</h3>
        <div className="description">
          {propsItem.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{propsItem.currency} {(Math.round(propsItem.price* 100) / 100).toFixed(2)} </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
      </>
    )
  }
    

}