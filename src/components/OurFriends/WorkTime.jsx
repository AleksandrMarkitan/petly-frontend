import { nanoid } from 'nanoid';
import { List, Button, Days, Hours, Dr } from './OurFriends.styled';
import { useState } from 'react';
export const WorkTime = ({ workDays }) => {
  const days = ['MN: ', 'TU: ', 'WE: ', 'TH: ', 'FR: ', 'SA: ', 'SU: '];
  // const currentDay = new Date();

  const [modalOpened, setModalOpened] = useState(false);
  const handleClick = () => {
    setModalOpened(!modalOpened);
  };
  return (
    <>
      <Button type="click" onClick={handleClick}>
        {workDays[0].from && workDays[0].to
          ? `${workDays[0]?.from} - ${workDays[0]?.to}`
          : 'Closed'}
      </Button>

      {modalOpened && (
        <>
          <List>
            {workDays.map(({ from, to, isOpen }, index) => (
              <li key={nanoid()}>
                {isOpen ? (
                  <Dr>
                    <Hours>{days[index]} </Hours>
                    <Hours>
                      {from}-{to}
                    </Hours>
                  </Dr>
                ) : (
                  <Days>
                    <Hours>{days[index]} </Hours>
                    <Hours>Closed</Hours>
                  </Days>
                )}
              </li>
            ))}
          </List>
        </>
      )}
    </>
  );
};
