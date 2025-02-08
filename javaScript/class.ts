// ✅ Defining an Order Type
type Order = { id: number; name: string };

// ✅ OrderManagerTs class that manages orders
class OrderManagerTs {
  private orders: Order[] = [];

  // Execute any CommandTs on the orders
  automateOrderTask(CommandTs: CommandTs, ...args: any[]): void {
    console.log("Current Orders:", this.orders);
    CommandTs.execute(this.orders, ...args);
  }

 
}

// ✅ CommandTs class that stores an executable function
class CommandTs {
  execute: (orders: Order[], ...args: any[]) => any;

  constructor(execute: (orders: Order[], ...args: any[]) => any) {
    this.execute = execute;
  }
}



// ✅ Function that returns a CommandTs to place an order
function PlaceOrderCommand(orderName: string, id: number): CommandTs {
  return new CommandTs((orders: Order[]) => {
    orders.push({ id, name: orderName });
    return `Order ${orderName} has been placed with ID ${id}`;
  });
}

// ✅ Function that returns a CommandTs to cancel an order


// ✅ Testing the OrderManagerTs and Commands
const managerTs = new OrderManagerTs();

// Create a new order manually

// Execute "Place Order" CommandTs
const placeOrderCommand = PlaceOrderCommand("Pizza", 2);
managerTs.automateOrderTask(placeOrderCommand);



