declare module '@todo/module-name' {
import { SFC } from 'react';
export interface SelectProps {
allowClear?:boolean = false;
autoFocus?:boolean = false;
defaultActiveFirstOption?:boolean = true;
defaultValue?:any;
disabled?:boolean = false;
dropdownClassName?:string;
dropdownMatchSelectWidth?:boolean = true;
dropdownStyle?:any;
filterOption?:any = true;
firstActiveValue?:any;
getPopupContainer?:any = () => document.body;
labelInValue?:boolean = false;
maxTagCount?:number;
maxTagPlaceholder?:any;
mode?:any = 'default';
notFoundContent?:string = "'Not Found'";
optionFilterProp?:string = "value";
optionLabelProp?:string = "<code>value</code> for <code>combobox</code>, <code>children</code> for other modes";
placeholder?:any;
showArrow?:boolean = true;
showSearch?:boolean = false;
size?:string = "default";
tokenSeparators?:any = ;
value?:any;
onBlur?:any;
onChange?:any;
onDeselect?:any;
onFocus?:any;
onInputKeyDown?:any;
onMouseEnter?:any;
onMouseLeave?:any;
onPopupScroll?:any;
onSearch?:any = ;
onSelect?:any;
open?:boolean;
onDropdownVisibleChange?:any;
}
export const Select: React.Component<SelectProps>;
}