import { useState } from 'react';
import './App.css';

const orders = [100, 200, 300];
const gifts = [
  'intel i5',
  'intel i7',
  'intel i9',
  'Ryzen 5',
  'Ryzen 7',
  'Ryzen 9'
];

function App() {

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, current) => total + current);

    return total
  });

  const onClickCounter = () => {
    setCounter(counter + 1);
  }

  const [userInfo, setUserInfo] = useState({
    name: 'Nguyen Chanh',
    age: 22,
    address: 'Da Nang'
  });

  const onClickUpdate = () => {
    setUserInfo({
      ...userInfo,
      bio: 'Depzai'
    });
  }

  const [gift, setGift] = useState();

  const onClickGift = () => {
    const number = Math.floor(Math.random() * gifts.length);
    setGift(gifts[number]);
  };

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onClickLogin = () => {
    console.log(username, password);
  };
  
  const [checkGifts, setCheckGifts] = useState([]);

  const isChecked = (giftInput) => checkGifts.includes(giftInput);

  const onChangeGift = (gift) => {
    setCheckGifts(prev => {
      if (isChecked(gift)) {
        return checkGifts.filter((item) => item !== gift);
      }
      return [...prev, gift]
    });
  }

  return (
    <div className="App" style={{ padding: 20 }}>

      { gifts.map((gift, i) => (
        <div key={i}>
          <input
            type="checkbox"
            id={ 'item-' + i }
            onChange={() => onChangeGift(gift)}
            checked={isChecked(gift)}
          />
          <label htmlFor={ 'item-' + i }>{gift}</label>
        </div>
      )) }

      {/* <div>
        <input 
          type='text'
          placeholder='Input username'
          value= {username}
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type='password'
          placeholder='Input password'
          value= {password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={onClickLogin}>Login</button>
      </div> */}

      {/* <h1>{gift || 'Phần thưởng'}</h1>
      <button onClick={onClickGift}>Lấy thưởng</button>

      <h1>{JSON.stringify(userInfo)}</h1>
      <button onClick={onClickUpdate}>Update</button>

      <h1>{counter}</h1>
      <button onClick={onClickCounter}>Counter</button> */}
    </div>
  );
}

export default App;
