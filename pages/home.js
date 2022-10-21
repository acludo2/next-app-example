import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeContainer from "../Containers/Home";
import { useEffect } from 'react';

export default function Home(props) {
    return <div className={styles.container}>
            <HomeContainer {...props} />
        </div>;
}
