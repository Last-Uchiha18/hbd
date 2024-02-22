import './surprises.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Surprises() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };

      const [isModalOpen1, setIsModalOpen1] = useState(false);

      const handleClick1 = () => {
          setIsModalOpen1(true);
        };
  
        const closeModal1 = () => {
          setIsModalOpen1(false);
        };

    return (
        <>
            <div className='surprises'>
                <img src="/gift2.gif" alt="dadsaddas" onClick={handleClick}  style={{ cursor: 'pointer' }}/>
                <img src="/gift2.gif" alt="dadsaddas" style={{ cursor: 'pointer' }} onClick={handleClick1}/>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></span>
                        <p className='story'>
                        So I guess enough roasting (for now xD). Hey dude, to be honest nothing is coming to my mind. 
                        Feels like sab such toh pata hai kya  hi naya boldunga. But maybe that’s just how it goes. 
                        So a mandatory few words :P. You have been through a lot in this past year, maybe it was the worst or maybe not, 
                        you would know better. But from my perspective I think this is the lowest I have seen you, given whatever time we have been friends. 
                        But even after going through this much you are still the same, same friendly person who would not do anyone wrong and that my 
                        friend is commendable for sure. One question arises tho, yeh jab main ata hun life main tab bura sharu hota hai ya fir jab
                        bura shuru hota hai tab god sends me xD. I would like to think that the latter is true. But in any case, 
                        I would be by your side (till eod). Uske baad mera time up, bohut seh lia. At least ek saal ka break lgega for recovery.
<br />
                        May god give you happiness and strength, in the upcoming phase of your life.
                        All your wishes come true. I have said this before I will say it again, you deserve the best my friend (and that's why 
                        you got me XD).
                        Do things you love the most, especially visiting Korea.
                        <br />
                        <br />
                        Annyeong geuligo Saeng-il Chughahaeyo!!

                        </p>
                    </div>
                 
                </div>
      )}

{isModalOpen1 && (          
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={closeModal1}><FontAwesomeIcon icon={faXmark} /></span>
          <p className='story2'>
          Bss bhai aur kya chahiye hadddd haiiii. Main ni aaa skta wahan ab and Sorry dress couldn't reach on time.
          <br />
Before you go here’s a song. 
<br />
<a rel="stylesheet" href="https://www.youtube.com/watch?v=CbtoiMKaKGY" className="song">Give it a listen when you get time</a>

<br />
            <br />
Until next time, Enjoy your day and Happy Birthday once again!
<br />
P.S. Below is one of my fav pic of yours. I just don’t have words to describe it :)  </p>

          <img src="/lil.jpg" alt="" className='modalImg'/>

                    </div>
                 
                </div>
      )}
        </>
    )
}

export default Surprises;