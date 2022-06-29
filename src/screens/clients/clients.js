import SearchIcon from "../../components/icons/SearchIcon";
import Table from "../../components/table/Table";
import { clientsText } from "../../constants/StaticText/clients";

const Clients = () => {
  return (
    <>
      <div className="p-2">
        <div className="d-flex justify-start align-center mt-2 mb-4">
          <div className="font-weight-bold font-size-32">
            {clientsText.heading}
          </div>
        </div>
        <div className="border-top border-bottom">
          <div className="d-flex justify-content-start alignCenter my-2">
            <div className="font-weight-bold font-size-14 mx-1">
              {clientsText.heading}
            </div>
            <div className="font-weight-bold font-size-14 mx-1">
              {clientsText.tab2}
            </div>
            <div className="font-weight-bold font-size-14 mx-1">
              {clientsText.tab3}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <SearchIcon />
              <div className="mx-2">
                <input type="email" class="form-control" placeholder="Search" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button class="btn btn-light border">Add Lead</button>
            </div>
          </div>

          <div className="mt-3 container">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};
export default Clients;
