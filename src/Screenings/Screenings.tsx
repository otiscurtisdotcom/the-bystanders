import { useEffect, useState } from 'react';
import './Screenings.scss';
import screeningsData from './screenings.json';

interface Screening {
  COUNTRY: string;
  CITY: string;
  CINEMA: string;
  DATE: string;
  TIME: string;
  BOOKING_LINK: string;
  FESTIVAL: string;
  FESTIVAL_LINK: string;
}

const Screenings = () => {
  const [screenings, setScreenings] = useState<Screening[]>(screeningsData);

  const getScreenings = () => {
    return screenings.map((screening, i) =>
      (
        <div className='entry' key={i}>
          <h5>{screening.FESTIVAL}</h5>
          <p>{screening.CINEMA}</p>
          <p>{screening.DATE} {screening.TIME}</p>
          <p>{screening.CITY}, {screening.COUNTRY}</p>
          <div>
            {
              screening.FESTIVAL_LINK ? (
                <a className='cta small' href={screening.FESTIVAL_LINK}>
                  More info
                </a>
              ) : <></>
            }

            {
              screening.BOOKING_LINK ? (
                <a className='cta small' href={screening.BOOKING_LINK}>
                  Book tickets
                </a>
              ) : <></>
            }
          </div>
        </div>
      )
    )
  }

  return (
    <section className='screenings-wrapper'>
      <h3>Upcoming screenings</h3>
      <div className='screenings-list'>
        { getScreenings() }
      </div>
    </section>
  );
}

export default Screenings;
