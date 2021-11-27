import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.stats}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.statList}>
                {stats !== 0 && stats.map(({ id, label, percentage }) => (
                  <li className={styles.item} key={id}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;