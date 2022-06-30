import ActionDropdown from "./ActionDropdown";

const TableRow = () => {
  return (
    <div class="row border border-around-mid my-3 p-2">
      <div class="col-2">Mark</div>
      <div class="col-2">Otto</div>
      <div class="col">@mdo</div>
      <div class="col-2">Mark</div>
      <div class="col">Otto</div>
      <div class="col-2">@mdo</div>
      <div class="col">@mdo</div>
      <div class="col"><ActionDropdown /></div>
    </div>
  );
};

export default TableRow;
