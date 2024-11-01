import s from "./Header.module.css";

const OrderButton = (props) => {
  return (
    <div className={s.orderBtn}>
      <a href="/">Order the project</a>
    </div>
  );
};

export default OrderButton;
