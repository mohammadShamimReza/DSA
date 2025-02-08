class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model
    }

    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}

const myCar = new Car('Toyota', 'Corolla');

console.log(myCar.getDetails())

class OrderManager {
    constructor() {
        this.orders = [];
    }

    createOrder(order) { 
       return this.orders.push(order);
    }

    automateOrderTask(command, ...args) {

        command.execute(this.orders, ...args);
        console.log(this.orders)
    }

    getOrders() {
        return this.orders;
    }
}

const order = new OrderManager();

console.log(order.getOrders())
console.log(order.createOrder('Order 1'))
console.log(order.getOrders())

class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

const order1 = new Command(() => 'Order 1');
console.log(order1.execute())

function SayHelloCommand() {
    return new Command(() => 'Hello');
}

const helloCommane = SayHelloCommand()
console.log(helloCommane.execute())

function PlaceOrderComand(order, id) {
    return new Command((orders) => {
        orders.push({ id, name: order })
        return `Order ${order} has been placed`
    } )
}

console.log(PlaceOrderComand())

const manager = new OrderManager();
const placeOrder = manager.automateOrderTask(PlaceOrderComand('pizza', 11))
console.log(placeOrder)