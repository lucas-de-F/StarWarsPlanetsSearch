import '../card.css';

export function Card() {
  return (
    <>
      <div className="main darkColor"></div>
      <div className="mainTitle pading0">
        <p className='braking pading0'>BREAKING</p>
        <svg className="newsSVG" width="8vw" height="72" viewBox="0 0 177 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 0H37L42 11.7818H177L158 65H28L9 72H0L28 0Z" fill="#DE2D2D" />
          <path d="M43.76 59L57.648 20.6H46.192L41.648 34.296L40.432 20.664L29.04 20.6L14.96 59C21.9573 59 25.456 59 25.456 59L31.216 45.176L31.344 59H43.76Z" fill="white" />
          <path d="M70.8405 31.48L69.7525 34.296H84.9845L81.2725 45.112L65.5285 45.176L64.1845 48.632L79.9925 48.568L76.1525 59H54.7125C54.9258 59 53.9658 56.568 51.8325 51.704L61.0485 26.808L68.7925 20.6H89.8485L86.0725 31.416L70.8405 31.48Z" fill="white" />
          <path d="M111.725 48.568H115.18L125.549 20.6H137.005L128.044 45.24L116.076 59H104.877C104.791 58.5307 104.557 57.4 104.173 55.608L101.229 59H90.0285C89.5592 56.696 89.0685 54.3707 88.5565 52.024C87.5325 47.3307 86.9992 44.984 86.9565 44.984L95.8525 20.6L107.244 20.664L96.9405 48.568H100.333L110.701 20.6H122.221L111.725 48.568Z" fill="white" />
          <path d="M157.114 37.368L148.602 37.304L150.778 31.48L154.938 31.416L153.53 35.192H164.794L167.546 26.872L163.578 20.6H148.73L140.986 26.808L137.722 36.792C140.495 41.4427 141.775 43.768 141.562 43.768H150.458L148.41 48.696H144.058L145.466 45.432H134.266L131.77 51.704C133.903 56.568 134.863 59 134.65 59H149.562L157.754 53.88L161.658 43.512L157.114 37.368Z" fill="white" />
        </svg>
      </div>


      <div className="mainText color2 pading0">ABOUT
        <p className='mainTextEvery pading0'>EVERY</p>
        <p className='mainTextthing pading0' >THING</p>
        <p className='youwanted pading0' >THAT YOU WANTED</p>
      </div>
      <div className='mainSupportText pading0'>IN ONE PLACE</div>
      <div className='mainFooter pading0'>EDITED BY: LUCAS</div>
    </>
  )
}