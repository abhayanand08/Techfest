import Card from '../../components/card/Card';
// import Navbar from '../../components/navbar/Navbar';
// import Styles from '../components/card/EventCardSection.module.css';

import Styles from '../../components/card/EventCardSection.module.css';
import axiosInstance from '../../api/axios';

function Event({ events }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className={Styles.event}>
        <div className={Styles.heading}>
          Competitions <img src="img/line.svg" alt="" />
        </div>
        <div className={Styles.subheading}>Day 0</div>
        <div key={1} className={Styles.eventCardSection}>
          {events
            .filter((x) => x.dateofevent === 'day0')
            .map(
              ({ name, coverimg, registrationopen, club, desc, _id: id }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    coverimg={coverimg}
                    id={id}
                    club={club}
                    desc={desc}
                    registrationopen={registrationopen}
                  />
                );
              },
            )}
        </div>
        <div className={Styles.subheading}>Day 1</div>
        <div key={1} className={Styles.eventCardSection}>
          {events
            .filter((x) => x.dateofevent === 'day1')
            .map(
              ({ name, coverimg, registrationopen, club, desc, _id: id }) => {
                return (
                  <Card
                    key={id}
                    name={name}
                    coverimg={coverimg}
                    id={id}
                    club={club}
                    desc={desc}
                    registrationopen={registrationopen}
                  />
                );
              },
            )}
        </div>
        <div className={Styles.subheading}>Day 2</div>
        <div key={2} className={Styles.eventCardSection}>
          {events.map(
            ({
              name,
              coverimg,
              registrationopen,
              club,
              desc,
              _id: id,
              dateofevent,
            }) => {
              if (dateofevent === 'day2') {
                return (
                  <Card
                    key={id}
                    name={name}
                    coverimg={coverimg}
                    id={id}
                    club={club}
                    desc={desc}
                    registrationopen={registrationopen}
                  />
                );
              }
              // eslint-disable-next-line react/jsx-no-useless-fragment
              return <></>;
            },
          )}
        </div>
        <div className={Styles.subheading}>Day 3</div>
        <div key={3} className={Styles.eventCardSection}>
          {events.map(
            ({
              name,
              coverimg,
              registrationopen,
              club,
              desc,
              _id: id,
              dateofevent,
            }) => {
              if (dateofevent === 'day3') {
                return (
                  <Card
                    key={id}
                    name={name}
                    coverimg={coverimg}
                    id={id}
                    club={club}
                    desc={desc}
                    registrationopen={registrationopen}
                  />
                );
              }
              // eslint-disable-next-line react/jsx-no-useless-fragment
              return <></>;
            },
          )}
        </div>
      </div>
    </>
  );
}

export default Event;

export async function getStaticProps() {
  const res = await axiosInstance({
    method: 'get',
    url: '/event',
    withCredentials: false,
  });

  return {
    props: {
      events: res.data.data,
    },
    revalidate: 1000,
  };
}
