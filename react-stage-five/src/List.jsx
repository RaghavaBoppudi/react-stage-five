function List(props){

  // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  // //when working with strings and you want to sort an array beforehand, use the sort method:
  // fruits.sort();
  // //using built in map method to convert the above string into an array:
  // const listItems = fruits.map(fruit=><li>{fruit}</li>)
  // return(<ol>{listItems}</ol>)

  //to make the list elements as objects, enclose them in curly braces and have properties assigned like so:
  // const fruits = [{id: 1, name: "apple", calories: 95}, 
  //                 {id: 2, name: "orange", calories: 45}, 
  //                 {id: 3, name: "banana", calories: 105}, 
  //                 {id: 4, name: "coconut", calories: 159}, 
  //                 {id: 5, name: "pineapple", calories: 37}];

  //sort items in the list lexicographically - in dictionary order.
  // fruits.sort((a, b ) => a.name.localeCompare(b.name));

  //for reverse alphabetical order:
  // fruits.sort((a, b ) => a.name.localeCompare(b.name));

  //to sort calrories in the increasing order (numeric order):
  // fruits.sort((a, b) => a.calories - b.calories)

  //for reverse numeric, or descending order:
  // fruits.sort((a, b) => b.calories - a.calories)

  //Filter using criteria:
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //iterates through entire array and creates a new array with the elements that have fruit calories less than a 100.

  // const highCalFruits = fruits.filter(fruit => fruit.calories > 100); //iterates through entire array and creates a new array with the elements that have fruit calories greater than a 100.

  //using built in map method to convert the above string into an array:
  // we use a key attribute because React prefers a unique key for each item to keep track of item insertions and deletions
  //&nbsp is HTML's way of producing a non-breaking space as some characters are reserved in HTML and you'll need to use character entities
  // const listItems = fruits.map(fruit=><li key={fruit.id}>{fruit.name}: &nbsp;{fruit.calories}</li>)

  //transforming the list component so it is reusable with different lists:
  //For this, you can move the const fruits into the App.jsx to be used as props, and then add props as the parameter for the List function as done at the top of this jsx file.

  const category = props.category; // saves the category specified in the props to the constant category.
  const itemList = props.items;

  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>);

  return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>) //returns the category of the element and the mapped array listItems.
  
}

// Adding defaultProps as a fallback IF props aren't defined.

List.defaultProps = {
  category: "Category", // 'Category' is displayed if the category prop is not defined in App.jsx
  items: [], // An empty array results in nothing being displayed if the items prop is not defined in App.jsx

}
// Also propTypes. REMEMBER TO IMPORT PROPTYPES
import PropTypes from 'prop-types';

List.propTypes = {
  //Define a proptype for the category to be a string. 
  category: PropTypes.string, 
  // For items, you have a proptype of an array with the shape of objects using {} and then defining the proptype for each element inside the object (id, name and calories in this case)
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number}))
}

export default List