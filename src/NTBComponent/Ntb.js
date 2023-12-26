// // import React from 'react'

// // const Ntb = () => {
// //   return (
// //     <div>Ntb</div>
// //   )
// // }

// // export default Ntb

// import React, { useState } from 'react';
// import './Ntb.css';

// const Ntb = () => {
//   const [employeeList, setEmployeeList] = useState([]);
//   const [isChecked, setIsChecked] = useState(false);
//   const [employeeDetails, setEmployeeDetails] = useState({
//     name: 'Jack Smith',
//     date: new Date().toLocaleDateString(),
//   });

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);

//     // If the checkbox is checked, add details to the list
//     if (!isChecked) {
//       setEmployeeList([...employeeList, employeeDetails]);
//     }
//     else{
//         const updatedList = employeeList.filter((emp) => emp !== employeeDetails);
//         setEmployeeList(updatedList);
//     }
//   };
//   const handleSelectAll = () => {

//   if (!isChecked) {
//     const updatedList = Array.from({ length: 1 }, () => employeeDetails); // Assuming there are 5 checkboxes
//     setEmployeeList(updatedList);
//   } else {
//     // Deselect all checkboxes and remove their details from the list
//     setEmployeeList([]);
//   }

//   // Toggle the state of the "Select All" button
//   setIsChecked(!isChecked);
// };

//   return (
//     <div>
//               <button onClick={handleSelectAll}>{isChecked ? 'Deselect All' : 'Select All'}</button>

//       <label>
//         <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
//         {employeeDetails.name} - {employeeDetails.date}
//       </label>

//       <div>
//         <h3>Employee List:</h3>
//         <ul>
//           {employeeList.map((employee, index) => (
//             <li key={index}>{employee.name} - {employee.date}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Ntb;
import React, { useState } from 'react';
import './Ntb.css'; // Import your CSS file

const Ntb = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState([{
    id:1,
    name: 'Jack Smhhhith',
    date: new Date().toLocaleDateString(),
  },
  { id:2,
    name: 'Jack Smithhjj',
    date: new Date().toLocaleDateString(),
  },
  { id:3,
    name: 'Jack Sbhhhmith',
    date: new Date().toLocaleDateString(),
  }]);

  const handleCheckboxChange = () => {
    // If "Select All" is checked, do not update individual checkboxes
    if (selectAll) {
      return;
    }

    // If the checkbox is checked, add details to the list
    const updatedList = [...employeeList];
    const index = updatedList.findIndex((emp) => emp === employeeDetails);

    if (index === -1) {
      updatedList.push(employeeDetails);
    } else {
      updatedList.splice(index, 1);
    }

    setEmployeeList(updatedList);
  };

  const handleSelectAllChange = () => {
    // Toggle the state of "Select All" checkbox
    setSelectAll(!selectAll);

    // Select or deselect all checkboxes based on the state of "Select All"
    const updatedList = selectAll ? [] : Array.from({ length: 5 }, () => employeeDetails); // Assuming there are 5 checkboxes
    setEmployeeList(updatedList);
  };

  return (
    <div className="employee-container">
      <div className="employee-row">
        <label>
          <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
          Select All
        </label>
      </div>

      <div className="employee-row">
        {employeeDetails.map((e,i)=> (

        <label>
          <input type="checkbox" checked={!selectAll} onChange={handleCheckboxChange} />
          {e.name} - {e.date}
        </label>
                ))}

      </div>

      <div>
        <h3>Employee List:</h3>
        <ul>
          {employeeList.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ntb;
