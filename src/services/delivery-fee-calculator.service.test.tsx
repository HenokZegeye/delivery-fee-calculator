import { get_distance_fee, 
        isFridayRush, 
        get_num_items_fee, 
        get_small_orders_fee, 
        calculatFee} from './delivery-fee-calculator.service';

describe('CalculatorService', ()=>{
    it('should return 2 for less than 1000m distance', () => {
        expect(get_distance_fee(999)).toEqual(2);
    });

    it('should add 1€ for each 500m', () => {
        expect(get_distance_fee(1499)).toEqual(3);
    });

    it('should return true for fridayrush', () => {
        const date = new Date("2023-02-03T06:57:00.000Z");
        expect(isFridayRush(date)).toBeTruthy();
    });

    it('should not add 50 cents surcharge for lessthan five items', () => {
        expect(get_num_items_fee(4)).toEqual(0);
    });

    it('should add 50 cents more for five and more items', () => {
        expect(get_num_items_fee(5)).toEqual(0.5);
    });

    it('should add bulk fee for greaterthan 12 items', () => {
        const BULK_FEE = 1.20;
        expect(get_num_items_fee(13)).toEqual(BULK_FEE + 4.5);
    });

    it('should add minimum order surcharge fee', () => {
        expect(get_small_orders_fee(8.90)).toEqual(1.10);
    });

    it('should not exceeds 15 €', () => {
        expect(calculatFee({
            delivery_distance: 500, amount_of_items: 40, cart_value: 50, date:  new Date("2023-02-03T06:57:00.000Z")
        })).toEqual(15);
    });

    it('should be 0 for 100 and more cart value', ()=>{
        expect(calculatFee({
            delivery_distance: 20, amount_of_items: 6, cart_value: 100, date:  new Date("2023-02-03T06:57:00.000Z")
        })).toEqual(0);
    });
});