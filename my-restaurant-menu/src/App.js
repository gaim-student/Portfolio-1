import "./App.css"
import Menu from "../src/components/Menu"
function App() {
  let data = [
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription:
            ["Meat and cheese layered between house-made pasta with bell peppers and onions."]
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: ["Cheese-filled ravioli served with house red sauce."]
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Chicken Parmesan",
          itemDescription:
            ["Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."]
        },
        {
          itemId: 4,
          itemPrice: "11",
          itemName: "Shrimp n Grits",
          itemDescription:
            ["Sauteed shrimp, on a bed of creamy grits."]
        },
      ],
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "10",
          itemName: "Chocolate Lava Cake",
          itemDescription: ["Dark chocolate molten lava cake. Serves 2-3."]
        },
        {
          itemId: 47,
          itemPrice: "8",
          itemName: "Tiramisu",
          itemDescription:
            ["Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."]
        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Cannolis",
          itemDescription:
            ["Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."]
        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: ["Steamed milk with two ristretto shots of espresso."]
        },
      ],
    },
  ]
  return (
    <div className="App">
      {data.map((menu) => (
        <Menu {...menu}></Menu>
      ))}
    </div>
  )
}
export default App