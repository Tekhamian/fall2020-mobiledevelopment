import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    // Send what it gets to the parent objects
    super(props);
  }

  render () {

    let responseHTML = ('');
    // responseHTML = responseHTML + "<ul>";
    responseHTML = responseHTML + `<ul>`;

    this.props.menu.forEach( (item) => {

    // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    
    // responseHTML = responseHTML + `<ul>` + `<li>${item}</li>` + `</ul>`;
    // console.log("<li>" + item + "</li>");  
    responseHTML = responseHTML + `<li>${item}</li>`;

    });

    // responseHTML = responseHTML + "<ul>";
    responseHTML = responseHTML + `<ul>`;
    
    return responseHTML;
  }
}

export default Sidebar;
