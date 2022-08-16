import { useState } from 'react';
import styles from '../TransactionForm/TransactionForm.module.css'
export const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(description, category, price);
    setDescription('');
    setCategory('');
    setPrice('');
  };

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        return '';
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          required
          name="description"
          value={description}
          type="text"
          placeholder="Product description"
          onChange={onChange}
        />
        <select
          required
          value={category}
          onChange={onChange}
          name="category"
          placeholder="Product category"
        >
          <option disabled selected hidden value="">
            Product category
          </option>
          <option value="Transport">Transport</option>
          <option value="Products">Products</option>
          <option selected value="Health">
            Health
          </option>
          <option value="Entertainment">Entertainment</option>
          <option value="Housing">Housing</option>
          <option value="Technique">Technique</option>
          <option value="Communal, communication">
            Communal, communication
          </option>
          <option value="Sports, hobbies">Sports, hobbies</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
        <input
          required
          name="price"
          value={price}
          type="text"
          placeholder="0,00"
          onChange={onChange}
        />

        <button type="submit">INPUT</button>
        <button
          type="button"
          onClick={() => {
            setDescription('');
            setCategory('');
            setPrice('');
          }}
        >
          CLEAR
        </button>
      </form>
    </>
  );
};
