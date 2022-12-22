import React from "react";

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          turpis luctus, euismod justo at, dapibus magna. Morbi vulputate tellus
          in sem aliquet condimentum. Nullam non mauris vitae odio dictum rutrum
          non eget metus. Integer eleifend purus ac sodales aliquet. Curabitur
          fringilla, orci at tincidunt dignissim, elit mauris pretium metus, at
          aliquam nulla odio ut metus. Donec fermentum turpis sit amet sapien
          aliquam hendrerit. Maecenas ornare orci quis justo aliquet posuere. Ut
          odio purus, semper id nisl eu, ultricies aliquet magna. Sed auctor
          eros eget leo placerat rhoncus. In nec vulputate neque. In posuere sed
          magna a suscipit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Integer gravida ante ut arcu malesuada lobortis. Nullam
          bibendum purus luctus scelerisque vestibulum. Nullam fermentum
          consectetur libero, sed elementum orci commodo eget. Nunc auctor
          commodo sapien, sed aliquet lectus iaculis eget. Suspendisse tincidunt
          a sapien vel ultricies. Maecenas a volutpat odio. Donec condimentum
          tempus porttitor. Etiam in finibus lacus, ut congue nibh. Sed erat
          sem, condimentum in interdum ac, sollicitudin id velit. Etiam vel nisi
          a metus eleifend auctor. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vestibulum euismod purus et
          bibendum feugiat. Vivamus ut tincidunt nunc. Aenean imperdiet vel
          ligula id sodales. Mauris sit amet nibh sit amet velit tristique
          ullamcorper nec vitae nisl. Quisque nec eros id magna convallis
          elementum eget non est. Praesent venenatis nisl augue, non blandit
          massa hendrerit ac. Morbi vel ligula nunc. Praesent eleifend, nunc
          vitae semper vehicula, ipsum lacus rhoncus quam, pellentesque
          porttitor erat velit sit amet mauris. Nulla venenatis ipsum ac orci
          sagittis, in volutpat magna pretium. Sed vel felis ipsum.
        </p>
      </div>
    );
  }
}
