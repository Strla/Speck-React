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
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />

        <EventCard
          title="UX/UI Design Workshop"
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />

        <EventCard
          title="UX/UI Design Workshop"
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />

        <EventCard
          title="UX/UI Design Workshop"
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />

        <EventCard
          title="UX/UI Design Workshop"
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />

        <EventCard
          title="UX/UI Design Workshop"
          lokacija="Hodnik FOI-ja"
          datumVrijeme="14.10. (9:00 - 16:00h)"
          slobodnaMjesta="15/60"
          firma="Speck"
          buttonText="Find out more"
        />
        </Grid>
      </Section>
    </>
  );
}

export default Events;
