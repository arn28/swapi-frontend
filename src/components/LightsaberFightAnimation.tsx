import './LightsaberFightAnimation.scss'
export function LightsaberFightAnimation() {
  return (
    <div className='loading-container'>
      {/* <Spinner /> */}
      <div id='loader'>
        <div className='ls-particles ls-part-1'></div>
        <div className='ls-particles ls-part-2'></div>
        <div className='ls-particles ls-part-3'></div>
        <div className='ls-particles ls-part-4'></div>
        <div className='ls-particles ls-part-5'></div>
        <div className='lightsaber ls-left ls-green'></div>
        <div className='lightsaber ls-right ls-red'></div>
      </div>
    </div>
  )
}
