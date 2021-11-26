import React from 'react';
import './itemList.scss';
import Item from '../item/Item';
// import { apps } from '../../../../data/Projects/apps';

function ItemList({ dataItems }) {
  return (
    <div className='projects-container'>
      {dataItems.map((item) => {
        return (
          <Item
            key={item.id}
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
