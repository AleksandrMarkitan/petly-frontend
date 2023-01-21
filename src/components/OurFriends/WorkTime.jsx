import { nanoid } from "nanoid";
import { Div, Button } from "./OurFriends.styled";
import { useState } from "react";
export const WorkTime = ({ workDays }) => {
  const days = ["MN: ", "TU: ", "WE: ", "TH: ", "FR: ", "SA: ", "SU: "];
  const [modalOpened, setModalOpened] = useState(false);
  const handleClick = () => {
    setModalOpened(!modalOpened);
  };
  return (
    <>
      <Button type="click" onClick={handleClick}>
        {workDays[0].from && workDays[0].to
          ? `${workDays[0]?.from} - ${workDays[0]?.to}`
          : "Closed"}
      </Button>

      {modalOpened && (
        <>
          <Div>
            {workDays.map(({ from, to, isOpen }, index) => (
              <li key={nanoid()}>
                {isOpen ? (
                  <p>
                    {days[index]}
                    {from}-{to}
                  </p>
                ) : (
                  <p>{days[index]}Closed</p>
                )}
              </li>
            ))}
          </Div>
        </>
      )}
    </>
  );
};
