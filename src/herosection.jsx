import { Link } from 'react-router-dom'
import style from '../styles/heroSection.module.css'

const Herosection = ({ h1, tab, p, bg }) => {
  return (
    <section className={style.Aboutcontainer}>
      {/* LCP IMAGE */}
      <img
        src={bg}
        alt={h1}
        className={style.heroImg}
        loading="eager"
        fetchpriority="high"
      />
      <div className={style.overlay}></div>
      
      <div className={style.about_container}>
        <div className={style.header}>
          <h1>{h1}</h1>
          <div className={style.tab_container}>
            <Link to="/" className={style.navigation_link}>{tab}</Link>
            <p>{`> ${p}`}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
