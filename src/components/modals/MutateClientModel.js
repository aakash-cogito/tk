import MutateClientForm from "../form/MutateClientForm";

const MutateClientModel = (props) => {
  const { onClose } = props;
  return (
    <>
      <div className="position-fixed client-model-parent d-flex justify-content-center align-items-center">
        <div className="client-model position-relative border bg-light ">
          <div className="modal-head px-3 py-2 bg-dark text-white d-flex justify-content-start">
            <div>Lead</div>
          </div>
          <div className="modal-body px-3 py-2 d-flex justify-content-start text-left">
            <MutateClientForm />
          </div>
        </div>
        <div
          className="position-fixed client-model-back"
          onClick={onClose}
        ></div>
      </div>
    </>
  );
};
MutateClientModel.defaultProps = { onClose: () => {} };
export default MutateClientModel;
