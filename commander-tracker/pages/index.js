import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <>
      <h1>Commander Tracker</h1>

      <button className="new-game-btn">
        Start New Game
      </button>

      <section className="recent-games">
        <h2>Recently Played Games</h2>
        <div className="game">
          <div className="players">

            <div className="indv-player">
              <p>Cody</p>
              <div className="cid">
                <Image src="/img/R.png" alt='Red Mana Symbol' width={18} height={18} />
                <Image src="/img/G.png" alt='Green Mana Symbol' width={18} height={18} />
                <Image src="/img/W.png" alt='White Mana Symbol' width={18} height={18} />
              </div>
            </div>

            <div className="indv-player">
              <p>Riley</p>
              <div className="cid">
                <Image src="/img/G.png" alt='Green Mana Symbol' width={18} height={18} />
                <Image src="/img/W.png" alt='White Mana Symbol' width={18} height={18} />
              </div>
            </div>

            <div className="indv-player">
              <p>Igor</p>
              <div className="cid">
                <Image src="/img/U.png" alt='Blue Mana Symbol' width={18} height={18} />
                <Image src="/img/B.png" alt='Black Mana Symbol' width={18} height={18} />
                <Image src="/img/R.png" alt='Red Mana Symbol' width={18} height={18} />
              </div>
            </div>

            <div className="indv-player">
              <p>Zack</p>
              <div className="cid">
                <Image src="/img/U.png" alt='Blue Mana Symbol' width={18} height={18} />
                <Image src="/img/B.png" alt='Black Mana Symbol' width={18} height={18} />
                <Image src="/img/R.png" alt='Red Mana Symbol' width={18} height={18} />
              </div>
            </div>

          </div>
          {/* end of the players div */}
          <p className='timestamp'>5 days ago</p>
        </div>
      </section>
    </>
    
  )
}
