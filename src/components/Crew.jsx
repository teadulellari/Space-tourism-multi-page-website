import React from "react";
import { useParams, NavLink} from "react-router-dom";
import "../styling/crew.css";
import "../styling/global.css";

const Crew = ({ crew }) => {
  const { name: selectedCrewName } = useParams();
  const selectedCrewNameFormatted = selectedCrewName ? selectedCrewName.replace(/-/g, ' ') : "";

  // Check if crew is available
  if (!crew) {
    return <div>Crew data not found</div>;
  }

  // Set default crew to "Douglas Hurley" if no crew is provided or if the route is /crew
  const selectedMember = crew.find((member) =>
    member.name.toLowerCase() === (selectedCrewNameFormatted || "douglas hurley")
  );

  if (!selectedMember) {
    return <div>Member not found</div>;
  }

  const { name, images, role, bio } = selectedMember;

  return (
    <div className="crew-container">
      <div className="title">
        <span>
          <span className="bold-number">02 </span>Meet your crew
        </span>
      </div>
      <div className="crew-image">
        <img src={images.png} alt={name} />
      </div>
      <div>
        <ul>
          {crew.map((member) => (
            <li key={member.name}>
              <NavLink
                to={`/crew/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                activeclassname="active-link"
              >
                {member.name === selectedMember.name ? (
                  <div className="dot" />
                ) : (
                  <div className="empty-dot" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="member-data">
        <h2>{role}</h2>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Crew;
