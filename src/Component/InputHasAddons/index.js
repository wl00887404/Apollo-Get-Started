import React from 'react'
import PropTypes from 'prop-types';
// eslint-disable-next-line 
import styles from "./styles.css"

const InputHasAddons = ({
    onChange,
    value,
    onSubmit
}) => {
    let submit=()=>{
        onSubmit(value)
        onChange({
            target:{
                value:""
            }
        })
    }
    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input 
                    className="input" 
                    type="text" 
                    value={value} 
                    onChange={onChange} 
                    onKeyDown={({keyCode})=>{
                        if(keyCode===13){
                            submit()
                        }
                    }}  
                    placeholder="新增待辦事項"/>
            </div>
            <div className="control">
                <a className="button is-primary" onClick={submit}>
                    加入
                </a>
            </div>
        </div>
    )
}
InputHasAddons.propTypes={
    onChange: PropTypes.func.isRequired
}
InputHasAddons.defaultProps={
    onSubmit:()=> console.warn("onSubmit() in InputHasAddons is triggered without assigned a onSubmit props")
}
export default InputHasAddons