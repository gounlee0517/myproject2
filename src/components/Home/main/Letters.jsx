// import React from 'react';
// import styled from 'styled-components';

// const LetterSection = ({ letters, curMembers, navigate, truncate }) => {
//   const Letter = styled.div`
//     display: flex;
//     padding: 10px;
//   `;

//   return (
//     <div className="letter-section">
//       {letters
//         .filter((value) => {
//           return value.writedTo === curMembers;
//         })
//         .map((item) => {
//           return (
//             <Letter
//               key={item.id}
//               onClick={() => {
//                 navigate(`Detail/${item.id}`);
//               }}
//             >
//               <img src={item.avatar} alt="avatar"></img>
//               <div>
//                 <h4>{item.nickname}</h4>
//                 <p>{truncate(item.content, 100)}</p>
//               </div>
//             </Letter>
//           );
//         })}
//     </div>
//   );
// };

// export default LetterSection;