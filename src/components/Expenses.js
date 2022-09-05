import ExpenseItem from './ExpenseItem';
import { expenses } from '../user-data';
import './Expenses.css';

function Expenses() {
  return (
    <div className='expenses'>
    {
      expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
      )
    }
    </div>
  );
}

export default Expenses;
