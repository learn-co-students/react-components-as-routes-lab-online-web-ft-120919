import React from 'react';

const ListPage = (namedObjList, name, innerList, ...misc) => {
  const mapListItem = (item, index) => {
    return <li key={index}>{item}</li>
  }

  const mapList = (list) => {
    return (
      <ul>
        {list.map(mapListItem)}
      </ul>
    )
  }

  const mapMisc = (thisObj) => {
    if(misc.length > 0) {
      return misc.map((itemName, index) => {
        let item = thisObj[itemName];
        return item ? <p key={index}>{`${itemName}: ${item}`}</p> : null;
      })
    } else {
        return null;
    }
  }

  const mapObj = (namedObj, index) => {
    return (
      <div className={name} key={index}>
        <p>{namedObj[name]}</p>
        {mapMisc(namedObj)}
        {mapList(namedObj[innerList])}
      </div>
    )
  }

  return (
    <React.Fragment>
      {namedObjList.map(mapObj)}
    </React.Fragment>
  );
}

export default ListPage;