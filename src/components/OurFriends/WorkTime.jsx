import { nanoid } from "nanoid";
import { Div } from "./OurFriends.styled";

export const WorkTime = (workDays) => {
  return (
    <Div>
      <span>
        <ul>
          {workDays.workDays.map(({ day, from, to, isOpen }) => (
            <li key={nanoid()}>
              {isOpen ? (
                <p>
                  <small>{day}&nbsp;&nbsp;</small>
                  {from} - {to}
                </p>
              ) : (
                <p>
                  <small>{day}</small> Closed
                </p>
              )}
            </li>
          ))}
        </ul>
      </span>

      <>
        <ul>
          {workDays.workDays.map(({ day, from, to, isOpen }) => (
            <li key={nanoid()}>
              {isOpen ? (
                <p>
                  <small>{day}&nbsp;&nbsp;</small>
                  {from} - {to}
                </p>
              ) : (
                <p>
                  <small>{day}</small> Closed
                </p>
              )}
            </li>
          ))}
        </ul>
      </>
    </Div>
  );
};
