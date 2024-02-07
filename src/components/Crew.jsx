import React, {useEffect} from "react";
import { useParams, NavLink} from "react-router-dom";
import "../styling/crew.css";
import "../styling/global.css";
import bg from "../assets/crew/background-crew-mobile.jpg"

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
  
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--bodyImg',
      `url("${bg}") center/cover no-repeat`
    );
  }, [images.bg]);

  return (
    <div className="crew-container">
      <div className="title">
        <span>
          <span className="bold-number">02 </span>Meet your crew
        </span>
      </div>
      <div className="crew-image">
      <img width={"170px"} height={"auto"} src={new URL(images.png, import.meta.url).href} alt={name} />

      </div>
      <div className="full-data">
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
    </div>
  );
};

export default Crew;
