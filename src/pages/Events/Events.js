import React from 'react';
import '../../App.scss';
import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid';
import EventCard from '../../components/EventCard/EventCard';


function Events() {
  return (
    <>
      <Section title="Events">
        <Grid columns="3">
          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />

          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />

          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />

          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />

          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />

          <EventCard
            title="UX/UI Design Workshop"
            location="Hodnik FOI-ja"
            dateTime="14.10. (9:00 - 16:00h)"
            freeSeats="15/60"
            company="Speck"
            buttonText="Find out more"
          />
        </Grid>
      </Section>
    </>
  );
}

export default Events;
