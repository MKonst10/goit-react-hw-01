import styles from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.headingsBlock}>
          <th className={styles.headings}>Type</th>
          <th className={styles.headings}>Amount</th>
          <th className={styles.headings}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {items.map((item) => {
          return (
            <tr className={styles.itemsBlock} key={item.id}>
              <td className={clsx(styles.item, styles.type)}>{item.type}</td>
              <td className={styles.item}>{item.amount}</td>
              <td className={styles.item}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
