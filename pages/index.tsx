import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className='menu'>
        <section>Home</section>
        <section>Skills</section>
        <section>Experience</section>
        <section>About</section>
        <section>Contacts</section>
      </div>

      <div className='home'>
        <div>
          <div>Hi. I am Beata. The Full-Stack Developer</div>
        </div>
      </div>
    </div>
  )
}
