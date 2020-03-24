// const receipt1 =
//   {
//     person: 'Karolin',
//     order: {
//       main: 'Burrito',
//       protein: 'Organic Tofu',
//       rice: 'Purple Rice',
//       sauce: 'Green Crack',
//       toppings: [
//         'Baby Bok Choy', 'Cucumber Kimchi'
//       ],
//       drink: 'Korchata',
//       cost: 22
//     },
//     paid: false
//   }
// const receipt2 = {
//   person: 'Jerrica',
//   order: {
//     main: 'Rice Bowl',
//     protein: 'Ginger Soy Chix',
//     rice: 'Sticky Rice',
//     sauce: 'Korilla',
//     toppings: [
//       'Yuzu Pickled Sweet Pepper', 'Kale'
//     ],
//     drink: 'Korchata',
//     cost: 19
//   },
//   paid: false
// }
// const receipt3 = {
//   person: 'Matt',
//   order: {
//     main: 'Salad Bowl',
//     protein: 'Organic Tofu',
//     rice: 'none',
//     sauce: "K'lla",
//     toppings: [
//       'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
//     ],
//     drink: 'Sparkling Blood Orange Soda',
//     cost: 20
//   },
//   paid: true
// }

const receipts = [
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
  ]

class Receipt extends React.Component {

    render () {
        return (
        <div className="box">
            <h1>{this.props.receipt.person}</h1>
            <h3>Main: {this.props.receipt.order.main}</h3>
            <h3>Protein: {this.props.receipt.order.protein}</h3>
            <h3>Rice: {this.props.receipt.order.rice}</h3>
            <h3>Sauce: {this.props.receipt.order.sauce}</h3>
            <h3>Drink: {this.props.receipt.order.drink}</h3>
            <h3>Cost: {this.props.receipt.order.cost}</h3>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        // receipt1: receipt1, 
        // receipt2: receipt2,
        // receipt3: receipt3,
        receipts: receipts, 
    }
    
    handleReceiptClick = () => {
        console.log("clicked")
        this.setState({paid: true})
    }

    render () {
        return (
        <div>
              {this.state.receipts.map(receipt => {
               return (!receipt.paid ? 
                <div onClick={this.handleReceiptClick}>
                <Receipt receipt = {receipt} /> </div> : null)
             })
            }
        </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector(".container"));
