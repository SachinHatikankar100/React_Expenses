import "../Expenses/ExpenseItems.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItems;
