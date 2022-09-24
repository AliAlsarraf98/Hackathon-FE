import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  CREATE_COMPANY,
  CREATE_INCOME,
  CREATE_OUTCOME,
} from "../../ui-graphql/mutations";
import { GET_COMPANIES } from "../../ui-graphql/queries";
import AddCompany from "./AddCompany";

const Company = () => {
  const [companies, comapniesInfo] = useLazyQuery(GET_COMPANIES);
  const [create, info] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: GET_COMPANIES }],
  });

  console.log("first");
  const [popDetailPage, PopDetailPage] = useState({ show: false, data: null });

  useEffect(() => {
    async function callQuery() {
      await companies();
    }

    callQuery();
  }, [info?.loading]);

  const data = comapniesInfo.data?.getCompanies;

  if (data?.length === 0)
    return (
      <div>
        <AddCompany create={create} info={info} />
      </div>
    );

  const handleClick = (e) => {
    PopDetailPage({ show: true, data: e });
  };

  const handleClose = () => {
    PopDetailPage({ show: false, data: null });
  };

  console.log(data);

  return (
    <>
      <div className="w-full h-full flex flex-col pt-[25%] md:pt-[10%] pl-[2%] pr-[2%]">
        {/* <DropDown myArray={data ? data : [1, 2, 4]} /> */}
        <div className="flex flex-col gap-5 ">
          <div className="text-white text-xl font-bold ">
            Welcome, {data && data[0].name}
          </div>
          <div className="text-white text-xl font-bold ">
            Budget: [ {data && data[0].budget} ]
          </div>

          <div className="text-white text-xl font-bold mb-[10px] text-center">
            NET PROFIT
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center pt-[2%] pb-[2%] h-full bg-gray-300 rounded-lg overflow-auto overscroll-auto">
          <CardRecord data={data && data[0]} onClick={handleClick} />
        </div>
      </div>
      {popDetailPage?.show && (
        <ShowDetails
          data={data[0].recordeSet[popDetailPage.data]}
          close={handleClose}
        />
      )}
    </>
  );
};

function CardRecord({ data, onClick }) {
  return data?.recordeSet?.map((r, index) => {
    return (
      <div
        key={index}
        onClick={() => onClick(index)}
        className="h-[150px] w-[150px] bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center hover:bg-gray-300 hover:border-black hover:border-2 hover:text-dark cursor-pointer font-bold"
      >
        <p>YEAR: [ {r.year} ]</p>
        <p>MONTH: [ {r.month} ]</p>
        <p>KWD: [ {r.netProfit} ]</p>
      </div>
    );
  });
}

function ShowDetails({ data, close = () => {} }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [income, setIncome] = useState({ name: "", amount: "" });
  const [create, info] = useMutation(CREATE_INCOME, {
    refetchQueries: [{ query: GET_COMPANIES }],
  });
  const [create2, info2] = useMutation(CREATE_OUTCOME, {
    refetchQueries: [{ query: GET_COMPANIES }],
  });

  const handleClose = () => {
    setShowModal(false);
  };
  const handleClose2 = () => {
    setShowModal2(false);
  };

  const handleChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await create({
      variables: { ...income, recorde: data.id, details: "", isOneTime: true },
    });
    setShowModal(false);
  };
  const handleSubmit2 = async () => {
    await create2({
      variables: { ...income, recorde: data.id, details: "", isOneTime: true },
    });
    setShowModal2(false);
  };
  return (
    <div className="absolute inset-0 w-full h-full bg-black z-[102] flex items-center justify-center">
      <div className="relative w-[95%] md:w-1/2 h-[95%] bg-gray-500 rounded-lg p-5 md:p-20 overflow-hidden flex flex-col gap-2">
        <div className="text-left text-white text-2xl">
          YEAR: [ {data.year} ]
        </div>
        <div className="text-left text-white text-2xl ">
          MONTH: [ {data.month} ]
        </div>
        <div className="text-left text-white text-2xl ">
          NETPROFIT: [ {data.netProfit} ]
        </div>
        <div className="relative border-2 border-white h-full rounded-md pt-10">
          <div className="text-center text-white text-2xl ">Revenue</div>
          <div
            onClick={() => setShowModal(true)}
            className="text-center text-white text-2xl absolute top-2 right-2 border-2 border-black rounded-md px-2 hover:bg-black hover:text-white cursor-pointer"
          >
            + ADD
          </div>
          <div className="text-white flex justify-evenly pt-5 pl-[10px] pr-[10px]">
            <div className="font-bold text-lg">NAME</div>
            <div className="font-bold text-lg">AMOUNT</div>
          </div>
          <div className=" overflow-auto overscroll-auto h-[75%] ">
            <GiveMEDATA data={data.incomeSet} />
          </div>
        </div>
        <div className="relative border-2 border-white h-full rounded-md pt-10">
          <div className="text-center text-white text-2xl ">Expenses</div>
          <div
            onClick={() => setShowModal2(true)}
            className="text-center text-white text-2xl absolute top-2 right-2 border-2 border-black rounded-md px-2 hover:bg-black hover:text-white cursor-pointer"
          >
            + ADD
          </div>
          <div className="text-white flex justify-evenly pt-5 pl-[10px] pr-[10px]">
            <div className="font-bold text-lg">NAME</div>
            <div className="font-bold text-lg">AMOUNT</div>
          </div>
          <div className=" overflow-auto overscroll-auto h-[75%] ">
            <GiveMEDATA data={data.outcomeSet} />
          </div>
        </div>
        <div
          onClick={close}
          className="text-dark absolute top-5 right-5 text-xl cursor-pointer hover:text-white"
        >
          CLOSE
        </div>
      </div>

      {showModal && (
        <AddIncomeModal
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          info={info}
        />
      )}

      {showModal2 && (
        <AddOutcomeModal
          handleClose={handleClose2}
          handleChange={handleChange}
          handleSubmit={handleSubmit2}
          info={info2}
        />
      )}
    </div>
  );
}

function GiveMEDATA({ data }) {
  if (data?.length === 0)
    return <div className="text-white text-xl text-center ">No Data</div>;
  return data?.map((e, index) => {
    return (
      <div
        key={index}
        className={`text-white flex justify-evenly p-2 pl-[10px] pr-[10px] items-center ${
          index % 2 === 0 ? "bg-gray-600" : ""
        }`}
      >
        <div>{e.name}</div>
        <div>{e.amount}</div>
      </div>
    );
  });
}

function AddIncomeModal({ handleClose, handleChange, handleSubmit, info }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black z-[102] flex items-center justify-center">
      <div className="relative w-[95%] md:w-1/2 h-2/5 bg-gray-500 rounded-lg p-10 overflow-hidden">
        <div className="text-center text-white text-2xl">ADD Revenue</div>
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
            name="amount"
            className="w-full h-[50px] rounded-lg p-2 border-2 border-black"
            placeholder="Amount"
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

function AddOutcomeModal({ handleClose, handleChange, handleSubmit, info }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black z-[102] flex items-center justify-center">
      <div className="relative w-[95%] md:w-1/2 h-2/5 bg-gray-500 rounded-lg p-10 overflow-hidden">
        <div className="text-center text-white text-2xl">ADD EXPENSES</div>
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
            name="amount"
            className="w-full h-[50px] rounded-lg p-2 border-2 border-black"
            placeholder="Amount"
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
// function DropDown({ myArray = [] }) {
//   const info = myArray.map((eme, index) => {
//     return (
//       <li key={index}>
//         <div className="flex items-center">
//           <input
//             id="checkbox-item-3"
//             type="checkbox"
//             value=""
//             className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//           />
//           <label
//             for="checkbox-item-3"
//             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             dsdjksh
//           </label>
//         </div>
//       </li>
//     );
//   });

//   return (
//     <>
//       <button
//         id="dropdownCheckboxButton"
//         data-dropdown-toggle="dropdownDefaultCheckbox"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         My Companies
//         <svg
//           className="ml-2 w-4 h-4"
//           aria-hidden="true"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M19 9l-7 7-7-7"
//           ></path>
//         </svg>
//       </button>

//       <div
//         id="dropdownDefaultCheckbox"
//         className="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
//       >
//         <ul
//           className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownCheckboxButton"
//         >
//           {info}
//           <li>
//             <div className="flex items-center">
//               <input
//                 checked
//                 id="checkbox-item-2"
//                 type="checkbox"
//                 value=""
//                 className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//               />
//               <label
//                 for="checkbox-item-2"
//                 className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Checked state
//               </label>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }
export default Company;
