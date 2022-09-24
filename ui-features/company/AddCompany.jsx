import React, { useState } from "react";

const AddCompany = ({ create, info }) => {
  const [comapnyInfo, setComapnyInfo] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    if (comapnyInfo?.budget && comapnyInfo?.name) {
      await create({ variables: comapnyInfo });
      handleClose();
    } else {
      // error
      console.log(comapnyInfo);
      alert("PLEASE FILL ALL THE FORMS");
    }
  };

  const handleChange = (e) => {
    setComapnyInfo({ ...comapnyInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        className="bg-red-400 px-4 py-2 text-white hover:bg-white hover:text-red-400 rounded-md"
        onClick={handleOpen}
      >
        Add a company
      </button>
      {open && (
        <ModalPop
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          info={info}
        />
      )}
    </div>
  );
};

function ModalPop({ handleChange, handleSubmit, handleClose, info }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black z-[102] flex items-center justify-center">
      <div className="relative w-[95%] md:w-1/2 h-2/5 bg-gray-500 rounded-lg p-10 overflow-hidden">
        <div className="text-center text-white text-2xl">ADD COMPANY</div>
        <div
          onClick={handleClose}
          className="absolute right-5 top-5 text-gray-800 cursor-pointer hover:text-white"
        >
          CLOSE
        </div>
        <div className=" h-full flex flex-col items-center justify-center gap-10">
          <input
            onChange={handleChange}
            name="name"
            className="w-full h-[50px] rounded-lg p-2 border-2 border-black"
            placeholder="Name"
          ></input>
          <input
            onChange={handleChange}
            name="budget"
            className="w-full h-[50px] rounded-lg p-2 border-2 border-black"
            placeholder="Budget"
          ></input>
          <button
            onClick={handleSubmit}
            className="bg-dark px-4 py-2 text-white hover:bg-white hover:text-dark rounded-md border-2 border-black"
          >
            {info?.loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddCompany;
