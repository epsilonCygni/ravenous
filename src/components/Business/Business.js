import React from 'react';
import './Business.css';

class Business extends React.Component {
  /* help for link to google maps */
  urlHelp = {
    name: this.props.business.name.split(" ").join("+"),
    address: this.props.business.address.split(" ").join("+"),
    city: this.props.business.city.split(" ").join("+"),
    country: this.props.business.country.split(" ").join("+")
  }
  
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt='' />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
              {/* link to google maps address !!! rel="noopener noreferrer" */}
              <a href={`https://www.google.com/maps/search/?api=1&query=${this.urlHelp.name},+${this.urlHelp.address},+${this.urlHelp.city},+${this.urlHelp.country}`} target='_blank' rel="noopener noreferrer">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.state} {this.props.business.zipCode}</p>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Business;
