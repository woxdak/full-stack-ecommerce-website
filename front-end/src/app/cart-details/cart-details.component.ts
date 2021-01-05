import { Component, OnInit } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuanitty: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }


  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

      this.cartService.totalQuantity.subscribe(
        data => this.totalQuanitty = data
      );
    

      this.cartService.computeCartTotals();
  }


  incrementQuantity(theCartItem: CartItem){
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem){
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem){
    this.cartService.remove(theCartItem);
  }


}
