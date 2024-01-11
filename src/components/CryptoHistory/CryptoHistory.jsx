const tableHeaders = ['№', 'price', 'amount', 'date'];
import { formatDate } from "helpers/formatDate";
import style from "./CryptoHistory.module.css"
export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map((el, indx) => (
            <th className={style.th} key={indx}>
              {el}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, indx) => (
          <tr className={style.tr} key={id}>
            <td className={style.td}>{indx + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formatDate(date)}</td>
          </tr>
        ))}
      
      </tbody>
    </table>
  );
};
