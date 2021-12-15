// import React, { useEffect, useRef, useState } from "react";

// const SetPoint = (props) => {
//   const { id, is_point, point } = props;
//   const { handlePoint } = props;
//    const pointInput = useRef(null);

//   return (
//     <div>
     
//         <Typography variant="h6" className="text-bold mb-10">
//           Sử dụng điểm{" "}
//           <Checkbox
//             {...label}
//             defaultChecked={is_point}
//             onChange={() => setPoint(!is_point)}
//           />
//         </Typography>
//         <input
//         className="px-0"
//         defaultValue={0}
//         onBlur={(e) => {
//           const point = e.target.value;
//           handlePoint({
//             _id,
//             point,
//           });
//         }}
//         ref={pointInput}
//       />
    
//       </div>

//   );
// };

// export default SetPoint;
