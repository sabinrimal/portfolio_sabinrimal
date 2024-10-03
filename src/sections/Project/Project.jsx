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
                    link='https://github.com/sabinrimal/portfolio_sabinrimal'
                    h3='My Portfolio'
                    p='Web based single page Portfolio site using REACT'
                    h6='---REACT based Application---'
                />  
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/T20_Score_Prediction'
                    h3='T20 Score Prediction'
                    p='Web based T20 Format score prediction application'
                    h6='---Python & JupyterNotebook based Application---'
                />
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/point-of-sale'
                    h3='Dream POS'
                    p='Web based Point-of-Sale application'
                    h6='---Laravel & MySql based Application---'
                />
                <ProjectCard
                    src={viberr}
                    link='https://github.com/sabinrimal/DreamExplorer'
                    h3='Dream Explorer'
                    p='Web based Vehicle-Rental application'
                    h6='---PHP & MySql based Application---'
                />
            </div>
        </section>
    </>
  )
}

export default Project
