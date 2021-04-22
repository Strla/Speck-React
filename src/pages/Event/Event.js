import React from 'react';
import '../../App.scss';
import Section from '../../components/Section/Section';
import EventInfo from '../../components/EventInfo/EventInfo';

import ImageDesign from '../../assets/images/design.jpg';


function Event() {
  return (
    <>
      <Section title="UX/UI Design Workshop">

        <EventInfo
          image={ImageDesign}
          location="Hodnik FOI-a"
          dateTime="14.10. (9:00 - 16:00h)"
          freeSeats="15/60"
          company="Speck"
          buttonText="Prijavi se"
        />


      </Section>


    </>
  );
}

export default Event;
