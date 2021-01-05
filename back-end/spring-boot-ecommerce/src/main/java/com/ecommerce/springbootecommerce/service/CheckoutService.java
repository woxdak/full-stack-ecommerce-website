package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.dto.Purchase;
import com.ecommerce.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}