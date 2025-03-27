import React,{ Component } from "react";
import styles from "./Navbar.module.css";

export default class Navbar extends Component{
    render(){
        return (<>
        <div className={styles.nav}>
            <div className={styles.title}>FLiX</div>
            <div className={styles.cartContainer}>
                <img className={styles.cartIcon} alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                <span className={styles.cartCount}>3</span>
            </div>
        </div>
        
        </>)
    }
}