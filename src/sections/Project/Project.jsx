import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'

function Project() {
  return (
    <>
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/T20_Score_Prediction'
                    h3='T20 Score Prediction'
                    p='Web app for predicting T20 scores'
                />
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/point-of-sale'
                    h3='Dream POS'
                    p='Web app for Point of Sale'
                />
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/DreamExplorer'
                    h3='Dream Explorer'
                    p='Web app for Vehicle Renting'
                />
            </div>
        </section>
    </>
  )
}

export default Project
