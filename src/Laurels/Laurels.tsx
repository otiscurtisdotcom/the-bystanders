import './Laurels.scss';

const Laurels = () => {
  return (
    <section>
      <div className='large-laurels'>
        <img alt="Austin Film Festival" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/austin.png'} />
        <img alt="Sci-Fi London" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/scifi.png'} />
        <img alt="Berlin Independent Film Festival" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/berlin.png'} />
      </div>

      <div className='laurels'>
        <img alt="Torino Underground Cinefest" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/torino.png'} />
        <img alt="Fant Bilbao" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/bilbao.png'} />
        <img alt="Boston Sci Film Festival" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/boston.png'} />
        <img alt="Fantaspoa" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/ftp.png'} />
        <img alt="Macabro Fich" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/macabro.png'} />
        <img alt="Sydney Science Fiction Film Festival" className='laurel' src={process.env.PUBLIC_URL + '/img/laurels/sydney.png'} />
      </div>
    </section>
  );
}

export default Laurels;
