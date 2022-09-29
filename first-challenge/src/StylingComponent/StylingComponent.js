import './StylingComponent.css';
import classes from './Styles.module.css'


function StylingComponent(){
    const textStyle = {
        padding:'10px 0px', 
        backgroundColor: 'DeepPink', 
        color: '#fff', 
        width: '250px', 
        textAlign: 'center',
        border: '2px solid #fff'
    };

    return(
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <p className="import">Import CSS!</p>
                <p style={{ padding:'10px 0px', backgroundColor: 'DeepPink', color: '#fff', width: '250px', textAlign: 'center', border: '2px solid #fff'}}>Inside tag!</p>
                <p style={ textStyle }>Inside Component Function!</p>
                <p className={classes.module}>CSS Module!</p>
            </div>
        </div>
    );
};

export default StylingComponent;