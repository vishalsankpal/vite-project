// function Greetings({ name, company, color }) {
//   return (
//     <div>
//       <h1 style={{ color: color || "pink" }}>
//         Welcome {name} is working with {company || "NA"}
//       </h1>
//     </div>
//   );
// }
const Greetings = ({ name, company, color, profile }) => {
  return (
    <div>
      <p>{profile?.country}</p>
      <h1 style={{ color: color }}>
        Welcome {name} is working with {company}
      </h1>
    </div>
  );
};
Greetings.defaultProps = {
  color: "brown",
  company: "NA",
};

export default Greetings;
