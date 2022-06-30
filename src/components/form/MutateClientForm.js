import Form from "@rjsf/core";

const MutateClientForm = () => {
  const schema = {
    // title: "Todo",
    type: "object",
    required: [],
    properties: {
      status: { type: "string", title: "Status" },
      source: { type: "string", title: "Source" },
      leadDetail: {
        type: "array",
        title: "Lead Details",
        required: [],
        items: [
          { type: "string", title: "Name" },
          { type: "string", title: "Number" },
          { type: "string", title: "Email" },
          { type: "string", title: "Notes" },
        ],
      },
    },
  };
  return (
    <>
      <Form
        schema={schema}
        onChange={console.log("changed")}
        onSubmit={console.log("submitted")}
        onError={console.log("errors")}
      />
    </>
  );
};
export default MutateClientForm;
