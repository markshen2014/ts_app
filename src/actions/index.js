export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter: counter });
  };
  
  export const setData = (store, key, value) => {
    store.setState({ [key]: value });
    console.log(key);
    console.log(value);
    console.log(store.state.name);  
  };
  