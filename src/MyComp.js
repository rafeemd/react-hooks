import React, { useContext } from 'react';
import context1 from './context';
function PrintTheme(props) {
  let mycon = useContext(context1);
  return <context1.Consumer>{data => <h1>{data}</h1>}</context1.Consumer>;
}
class MyComp extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = context1;
  render() {
    console.log(this.context);
    return (
      <div>
        <context1.Provider value={'new title'}>
          <PrintTheme />
        </context1.Provider>
        <h1>{this.context}</h1>
      </div>
    );
  }
}

// MyComp.contextType = context1;

export default MyComp;
