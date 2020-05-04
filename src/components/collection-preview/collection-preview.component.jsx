import React from 'react';
import { withRouter } from "react-router-dom"; 


import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, linkUrl }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => {
        console.log(title)
        history.push(`${match.url}${linkUrl}`)
      }}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
