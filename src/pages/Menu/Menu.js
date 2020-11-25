import React, { Component } from 'react';
import './Menu.css';
import Bgi from '../../images/Pizza-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { PizzaImages } from '../../PizzaImages' 
import { connect } from 'react-redux'
import { fetchPizza } from '../../action/menuActions'
import MenuItems from './components/MenuItems'

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    }
  }

  displayContent = async () => {
    const { pizzas: { pizzas } } = this.props;
    const pizzaImage = PizzaImages;
    pizzas.forEach( ele => {
      pizzaImage.forEach( i => {
        if(i.PizzaName === ele.PizzaName){
          let index = pizzaImage.indexOf(i);
          ele.Img = pizzaImage[index].Img;
        }
      })
    })
    this.setState({
      pizzas: pizzas
    });
  }

  componentDidMount = async () => {
    const { fetchPizza } = this.props;
    await fetchPizza();
    await this.displayContent();
  }

  render() {
    const updateCart = this.props.updateCart
    return (
      <div className="menu" style={{ backgroundImage: `url(${Bgi})` }}>
        <div className="catelogue">
          <div className="catelogue__topbar">
            <div className="catelogue__filter">
              <header>
                <input type="checkbox" id="filter" className="filter" />
                <label htmlFor="filter">
                  <div className="filter-container">
                    <ul>
                      <li className="filter__button">
                        <span></span>
                        <span></span>
                        <span></span>
                      </li>
                      <li className="filter__title"><h4>FILTER</h4></li>
                      <li className="filter__result">Showing 1-12 of 19 results</li>
                    </ul>
                  </div>
                </label>
                <div className="filter__items">
                  <ul>
                    <li>
                      <h3>SIZE</h3>
                      <div className="filter__radio">
                        <label className="filter__options">
                          <input type="radio" defaultChecked="checked" name="radio" />
                          <h4>Small</h4>
                          <span className="checkmark"></span>
                        </label>
                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Medium</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Large</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Jumbo</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="radio" name="radio" />
                          <h4>Party</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>SAUCES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Marinara</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Icing</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Barbeque</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Ranch</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Olive oil</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Garlic</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>CHEESES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Mozzarella</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Goat cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Mascarpone</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Gorgonzola</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Feta cheese</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Cheddar</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Parmigiano</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <h3>MEATS</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Pepperoni</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Grilled chicken</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Ham</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Beef</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Italian sausage</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Bacon</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Meatballs</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>

                    <li>
                      <h3>VEGGIES</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Onions</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Mushrooms</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Black olives</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Tomatoes</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Pineapple</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Peppers</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Aubergines</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li className="more-options">
                      <h3 className="more-vegetable">&#160;</h3>
                      <div>
                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Hot chillies</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Spinach</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Broccoli</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Cucumber</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" defaultChecked="checked" />
                          <h4>Garlic</h4>
                          <span className="checkmark"></span>
                        </label>

                        <label className="filter__options">
                          <input type="checkbox" />
                          <h4>Sweet Corn</h4>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="filter--selected">
                    <button className="filter__button--selected">
                      FILTER SELECTED
                  </button>
                  </div>
                </div>
              </header>
            </div>
            <div className="catelogue__default">
              <label htmlFor="default"></label>
              <select name="default" id="default" className="sorting">
                <option value="default">DEFAULT SORTING</option>
              </select>
            </div>
          </div>
          <div className="catelogue__product">
          {this.state.pizzas.map( (item) => 
            (
              <MenuItems details={item} updateCart={updateCart}/>
            )
            )}
        </div>
          <div className="pagination">
            <div className="previouspage"><a href="#">{ArrowLeft}</a></div>
            <div className="pagenumber">
              <a href="#">1</a>
              <a href="#" className="actived">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
            <div className="nextpage"><a href="#">{ArrowRight}</a></div>
          </div>
        </div>
      </div>);
  }
}

const mapStateToProps = state => {
  const { menuReducer: {loading, pizzas} } = state;
  return {
    loading,
    pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPizza: () => dispatch(fetchPizza())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);