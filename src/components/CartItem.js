import React, { Component } from 'react';
import { Box, Button } from 'grommet';
import { connect } from 'react-redux';
import { Close } from 'grommet-icons';

class CartItem extends Component {
    handleDeleteToCart = () => {
        console.log('Delete to cart')
        const {
            deleteItemAsync,
            id
        } = this.props;
        deleteItemAsync(id);
    }
    render() {
        const { name, amount } = this.props
        return (
            <Box direction="row" pad="small" border="bottom">
                <Box pad="small">
                    {name} x {amount}
                </Box>
                <Button
                    icon={<Close />}
                    pad="small"
                    onClick={this.handleDeleteToCart}></Button>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteItemAsync: dispatch.cart.deleteItemAsync
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)