import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


const name = 'venjiang'
export const siteTitle = 'Next.js 示例'
export const author = name

export default function Layout({children}) {
    return <div className={styles.container}>
        <h2 className={styles.title}>使用布局</h2>
        {children}
    </div>
}
