import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import { connect } from 'react-redux';
import { Close } from 'grommet-icons';

class CartItemList extends Component {
  handleDeleteToCart = (id) => {
    console.log('Delete to cart')
    console.log(id)
    const {
      deleteItemAsync
    } = this.props;
    deleteItemAsync(id);
  }
  render() {
    const {
      cartItems
    } = this.props
    return (
      <Box pad="small">
        {cartItems.map(item => (
          <Box direction="row" pad="small">
            <Box pad="small">
              {item.name} x {item.amount}
            </Box>
            <Box pad="small">
              <Button icon={<Close />} pad="small" margin="small" onClick={this.handleDeleteToCart(item.id)}></Button>
            </Box>
          </Box>
        ))}
      </Box>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteItemAsync: dispatch.cart.deleteItemAsync
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItemList)