import './about.scss';
import { ABOUT } from '../../data/menuElements';

function About() {
  return (
    <div className='about-container' id={ABOUT}>
      <div className='content'>
        <div className='left-container'>
          <h2>Moja historia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            consequatur eius maiores repellat! Aliquam iusto accusantium itaque
            nesciunt numquam hic in ullam quidem doloremque veritatis deserunt
            unde saepe soluta quam id excepturi, nostrum optio architecto beatae
            earum dolorum nihil, corporis consectetur! Commodi nobis a ad
            eligendi cumque autem voluptate cum! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Fuga rerum delectus cum magni deserunt
            accusamus impedit, dolor labore reprehenderit. Qui eaque aut at
            delectus necessitatibus id molestiae beatae dolorem ducimus?
          </p>
        </div>
        <div className='right-container'>
          <div className='img-container'>
            jakieś zdjęcie
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
