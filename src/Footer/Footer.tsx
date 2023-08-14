import './Footer.scss';
import {ReactComponent as InstaLogo} from './instagram.svg';

const Footer = () => {
  return (
    <section>
      <a target='_blank' className='insta' href='https://www.instagram.com/thebystandersfilm/'>
        <InstaLogo />
        <span>thebystandersfilm</span>
      </a>
    </section>
  );
}

export default Footer;
