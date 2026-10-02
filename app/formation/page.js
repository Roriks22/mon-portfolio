import Image from "next/image"
import Link from "next/link";
import styles from "./page.module.css";
import formationsData from "@/data/formations.json";

export const metadata = {
  title: 'Mes Formations | Portfolio',
  description: 'Découvrez mes parcours diplômants chez OpenClassRooms',
}

export default function Formations() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mes Formations</h1>
      <p className={styles.description}>
        Découvrez les parcours diplômants d&apos;OpenClassrooms
      </p>

      <div className={styles.grid}>
        {formationsData.map((formation) => (
          <Link
            href={`/formation/${formation.slug}`}
            key={formation.slug}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={formation.image}
                alt={formation.title}
                className={styles.image}
                width={800}
                height={500}
              />
            </div>
             <div className={styles.content}>
            <h2>{formation.title}</h2>
            <p>{formation.description}</p>
            <div className={styles.tags}>
              {formation.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <span className={styles.viewMore}>Voir la formation →</span>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}