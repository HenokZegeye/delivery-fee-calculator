const BULK_FEE = 1.20;

export const isFridayRush = (date: Date) => {
    const utchour = ((new Date(date).getUTCHours()) + 24) % 12;
    const utcday = new Date(date).getDay();
    return utcday === 5 && (utchour >= 3 && utchour <= 7);
}

export const get_distance_fee = (distance: number): number => {
    return distance <= 1000 ? 2 : Math.ceil(distance/500);
}

export const get_num_items_fee = (amount_of_items: number): number => {
    let surcharge_num_items = 0;
    if(amount_of_items >= 5){
      const additional = 0.5*((amount_of_items - 5)+1);
      surcharge_num_items = amount_of_items > 12 ?  additional + BULK_FEE: additional; 
    }
    return surcharge_num_items;
}

export const get_small_orders_fee = (cart_value: number): number => {
    return cart_value < 10 ? 10 - cart_value : 0;
}
  
export const get_fridayrush_fee = (isFridayRush: boolean, total_fee: number) => {
    return isFridayRush ? 1.2 * total_fee : total_fee;
}

export const calculatFee = ({delivery_distance, amount_of_items, cart_value, date}: any) => {
    const distance_fee = get_distance_fee(delivery_distance);
    const num_items_fee = get_num_items_fee(amount_of_items);
    const small_orders_fee = get_small_orders_fee(cart_value);
    const total_fee = distance_fee + num_items_fee + small_orders_fee;
    return cart_value < 100 ? Math.min(15, get_fridayrush_fee(isFridayRush(date), total_fee)) : 0;
}