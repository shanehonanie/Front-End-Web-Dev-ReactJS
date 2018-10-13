import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log('Menu Component ctor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                   <Dishdetail selectedDish={this.state.selectedDish}/>

            </div>
        );
    }
}

export default Menu;