import './Background.scss';

const Background = () => {
  return (
    <img alt='The Bystanders Film' className='bg-img' src={process.env.PUBLIC_URL + '/img/banner-img-1.jpg'} />
  );
}

export default Background;
