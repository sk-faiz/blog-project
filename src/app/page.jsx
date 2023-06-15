import Image from "next/image"
import Hero from "public/hero.png"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi! I'm Faiz Shaikh.</h1>
        <p className={styles.desc}>A MERN Stack Web Developer</p>
        <Button text="See my work" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  )
}
