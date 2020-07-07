import React from "react"
import Select, { components } from 'react-select'

const { Option } = components
const CustomSelectOption = props => (
  <Option {...props}>
    <CustomSelectValue {...props} />
  </Option>
)

const CustomSelectValue = props => (
  <div style={{display: "flex", alignItems: "center"}}>
    <img src={props.data.icon} width={25} style={{marginRight: "5px"}}/>
    <span>{props.data.label}</span>
  </div>
)

const IconSelect = ({options, onChange}) => 
<Select
  onChange={onChange}
  options={options}
  className={"Selector neuMorphismOut"}
  components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
/>

export default IconSelect