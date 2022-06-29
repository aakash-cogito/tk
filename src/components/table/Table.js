import { clientTableHeading } from "../../constants/lists/tableHead";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <>
      <div class="container">
        <div class="row py-2 solid-bottom-border ">
          {clientTableHeading.map((data, index) => (
            <div class={data.col || "col"} key={index}>
              {data.name}
            </div>
          ))}
        </div>
        <TableRow />
        <TableRow />
      </div>
    </>
  );
};

export default Table;
