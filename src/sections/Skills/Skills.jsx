import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
// import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList
                src={checkMarkIcon}
                skill="Adobe Illustrator"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Adobe Photoshop"
            />
            <SkillList
                src={checkMarkIcon}
                skill="SQL & DBMS"
            />
        </div>
            <hr/>
        <div className={styles.skillList}>
            <SkillList
                src={checkMarkIcon}
                skill="PHP"
            />
            <SkillList
                src={checkMarkIcon}
                skill="HTML"
            />
            <SkillList
                src={checkMarkIcon}
                skill="CSS"
            />
            <SkillList
                src={checkMarkIcon}
                skill="JavaScript"
            />
            <SkillList
                src={checkMarkIcon}
                skill="React JS"
            />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList
                src={checkMarkIcon}
                skill="Technical Support"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Computer Hardware and Software"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Windows Operating System"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Microsoft Office Package"
            />
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList
                src={checkMarkIcon}
                skill="Interpersonal Communication"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Team Player"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Technical Documentation"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Creative Problem Solver"
            />
        </div>
    </section>
  )
}

export default Skills
