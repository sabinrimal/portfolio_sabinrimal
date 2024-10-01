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
                skill="HTML"
            />
            <SkillList
                src={checkMarkIcon}
                skill="CSS"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Graphics"
            />
            <SkillList
                src={checkMarkIcon}
                skill="JavaScript"
            />
            <SkillList
                src={checkMarkIcon}
                skill="TypeScript"
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
                skill="NodeJS"
            />
            <SkillList
                src={checkMarkIcon}
                skill="ReactJS"
            />
            <SkillList
                src={checkMarkIcon}
                skill="MySQL"
            />
        </div>
    </section>
  )
}

export default Skills
