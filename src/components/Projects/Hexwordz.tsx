import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAmazon } from '@fortawesome/free-brands-svg-icons'
import YouTube,{YouTubeProps}  from 'react-youtube'

function Hexwordz() {

    const opts: YouTubeProps['opts'] = {
        height: '550px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 1,
          playsinlinne: 1,
          mute: 1,
          loop: 1,
        },
      };

  return (
    <div> 
        <ul className="fa-ul mb-0">
            <li className="wrapper">
                <FontAwesomeIcon icon={faGooglePlay} /><b> Hexwordz</b>
                <a  href='https://www.amazon.com/Gargansa-Hexwordz/dp/B00XDV9KV8/ref=sr_1_1?crid=2XNSHVJPLFIGA&keywords=hexwordz&qid=1698863601&s=mobile-apps&sprefix=%2Cmobile-apps%2C107&sr=1-1'> <FontAwesomeIcon icon={faAmazon} />Amazon App Store</a>
                <ul>
                    <li>
                    Designed and developed a single player word game called Hexwordz.
                    </li>
                    <li>
                    Hexwordz is a game where you search for words, the larger the word the more points you gain.
                    </li>
                    <li>
                        Algorithm to quickly determine if a word exists in the dictionary.
                    </li>
                    <li>
                        Background process quietly determines if any possible answers still remain on the board. Provides a hint if the player has not found a word after some time.
                    </li>
                    <li>
                        Two games modes: Level: Game gets more difficult as you progress though the levels. Timed: get as high of score as possible before the timer runs out. 
                    </li>
                    <li>
                        Special tiles shuffle the board, grant multipliers, add to timer, or destroy neighboring tiles to increase score. 
                    </li>
                    <li>
                        Shaders and color options are unlockable as you progress to give more customizable options. 
                    </li>
                    
                    <div className="mb-1 d-flex rounded-corners">
                        <div style={{width: '33.4%', backgroundColor:'black'}} className="d-inline-block">
                            <YouTube style={{marginTop:'2.5%'}} videoId="ojZBK204dT8" opts={opts} title="Hexwordz" id="video" />
                        </div>
                        
                        <img className="d-inline-block" style={{width: '33.3%', height: '300' }}
                        src="https://lh3.googleusercontent.com/w87PTM7TosD8SZfKhHsSKq7snizwu5KcrnbNUrCeUuYSOZV0E5cVW2teBFAWYURVN4y8=w720-h310-rw"
                        alt="hexwordz game title screen" />
                        <img className="d-inline-block" style={{width: '33.3%', height: '300' }}
                        src="https://lh3.googleusercontent.com/Sz2X7pwO_UUkVFcDofEhI7vjfZLP_APwpVuqH158IpDm4-DIl-S24WJjM6UjKA8xlw=w720-h310-rw"
                        alt="hexwordz game word selected" />


                    </div>
                    <hr className="m-3"></hr>
                    
                    
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Hexwordz