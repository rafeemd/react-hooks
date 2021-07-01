import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PrintList(props) {
  const [list, setList] = useState([]);
  console.log('propsprops', props);
  const { userList = 'people' } = props;
  const getList = () => {
    let url = `https://swapi.py4e.com/api/${userList}/`;
    axios.get(url).then(res => {
      const {
        data: { results = [] }
      } = res;
      setList(results);
    });
  };

  useEffect(() => {
    getList();
  }, [userList]);

  return (
    <React.Fragment>
      {list.map(user => {
        let { name, height, gender, model } = user;
        return (
          <div key={name}>
            <strong>{name}</strong>
            {userList === 'people' ? (
              <ul>
                <li>Height :{height}</li>
                <li>Gender :{gender}</li>
              </ul>
            ) : (
              <ul>
                <li>Model: {model}</li>
              </ul>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}
export default PrintList;
