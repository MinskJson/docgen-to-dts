declare module "@todo/module-name" {
  export interface SelectProps {
    allowClear?: boolean;
    autoFocus?: boolean;
    defaultActiveFirstOption?: boolean;
    defaultValue?: any;
    disabled?: boolean;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean;
    dropdownStyle?: any;
    filterOption?: any;
    firstActiveValue?: any;
    getPopupContainer?: any;
    labelInValue?: boolean;
    maxTagCount?: number;
    maxTagPlaceholder?: any;
    mode?: any;
    notFoundContent?: string;
    optionFilterProp?: string;
    optionLabelProp?: string;
    placeholder?: any;
    showArrow?: boolean;
    showSearch?: boolean;
    size?: string;
    tokenSeparators?: any;
    value?: any;
    onBlur?: any;
    onChange?: any;
    onDeselect?: any;
    onFocus?: any;
    onInputKeyDown?: any;
    onMouseEnter?: any;
    onMouseLeave?: any;
    onPopupScroll?: any;
    onSearch?: any;
    onSelect?: any;
    open?: boolean;
    onDropdownVisibleChange?: any;
  }
  export const Select: React.Component<SelectProps>;
}
