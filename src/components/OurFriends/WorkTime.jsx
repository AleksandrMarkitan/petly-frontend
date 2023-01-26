import { nanoid } from 'nanoid';
import { List, Button, Days, Hours, Dr } from './OurFriends.styled';
import { useState } from 'react';
export const WorkTime = ({ workDays }) => {
  const days = ['MN: ', 'TU: ', 'WE: ', 'TH: ', 'FR: ', 'SA: ', 'SU: '];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const [modalOpened, setModalOpened] = useState(false);
  const handleClick = () => {
    setModalOpened(!modalOpened);
  };
  const indexUpdater = () => {
    if (currentDay === 0) {
      return 6;
    }
    return currentDay - 1;
  };
  return (
    <>
      <Button type="click" onClick={handleClick}>
        {workDays[indexUpdater()].from && workDays[indexUpdater()].to
          ? `${workDays[indexUpdater()]?.from} - ${
              workDays[indexUpdater()]?.to
            }`
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
