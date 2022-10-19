import './page.css';

const BcgColor = (props) => {
    let t = props.temp;
    if(t < -5){
        document.body.style = 'background: #5f78fb'
    } else if (t > -5 && t < -1){
        document.body.style = 'background: #888ffc'
    } else if (t > -1 && t < 2){
        document.body.style = 'background: #a9a8fd'
    } else if (t > 2 && t < 4){
        document.body.style = 'background: #c5c1fe'
    } else if (t > 4 && t < 6){
        document.body.style = 'background: #dfdbff'
    } else if (t > 6 && t < 8){
        document.body.style = 'background: #e3dbfb'
    } else if (t > 8 && t < 10){
        document.body.style = 'background: #e6dcf7'
    } else if (t > 10 && t < 13){
        document.body.style = 'background: #e8ddf4'
    } else if (t > 13 && t < 10){
        document.body.style = 'background: #dec3e7'
    } else if (t > 10 && t < 14){
        document.body.style = 'background: #d8a7d6'
    } else if (t > 14 && t < 19){
        document.body.style = 'background: #d48ac0'
    } else if (t > 19){
        document.body.style = 'background: #d16ba5'
    } 
}
 
export default BcgColor;