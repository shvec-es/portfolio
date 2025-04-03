import s from './Header.module.css';

const OrderButton = props => {
  return (
    <div>
      <a className={s.orderBtn} href="/">
        Order the project
      </a>
    </div>
  );
};

export default OrderButton;
