import React,{Fragment} from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.Module.css'
import HederCartButton from './HederCartButton';


const Header = (props) => {
    return (
        <Fragment>
            <header  className={classes.header} >
                <h1>React Meals</h1>
                <HederCartButton onClick={props.onShowCart}/>            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A Table is full of delicious food"/>
            </div>
        </Fragment>
    )
}

export default Header
