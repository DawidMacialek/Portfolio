import React from 'react';
import './itemList.scss';
import Item from '../item/Item';

function ItemList({ dataItems }) {
  return (
    <div className='list-projects-container'>
      {dataItems.map((item) => {
        return (
          <Item
            key={item.name}
            name={item.name}
            miniPicture={item.miniPicture}
            description={item.description}
            Picture={item.Picture}
            playHref={item.playHref}
            gitHubHref={item.gitHubHref}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
