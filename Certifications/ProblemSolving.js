function filledOrders(order, k) {
    // Write your code here
    let counter = 0;
    // sort the array in ascending order
    order.sort((a,b) => a-b);
    for (let i=0; i<order.length; i++){
        if(k-order[i] >= 0){
            k = k - order[i];
            counter++;
        }   
    }
    return counter;
}
