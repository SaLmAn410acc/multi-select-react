import { useState } from "react";
import { RxChevronDown, RxCross2, RxDividerVertical } from "react-icons/rx";

type SelectOption = {
    label: string
    value: string | number
}

type Props = {
    options: SelectOption[]
    value: SelectOption[] | []
    onChange: (value: SelectOption[] | []) => void
}

const index = (props: Props) => {

    const { onChange, options, value } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpenAndClose = () =>{
        setIsOpen(!isOpen)
    }

    const handleEmptyList = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        e.stopPropagation()
        onChange([])
    }

    const handleUpdateList = (option: SelectOption, e: React.MouseEvent<HTMLSpanElement>) =>{
        e.stopPropagation()

        if(isAlreadySelected(option)) {
            const updatedList = value.filter((selectedOption) => selectedOption.value != option.value)    
            onChange(updatedList)
        } else{
            onChange([option, ...value])
        }
    }

    const handleRemoveOption = (option: SelectOption, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        e.stopPropagation()
        const updatedList = value.filter((selectedOption) => selectedOption.value != option.value)    
        onChange(updatedList)
    }

    const isAlreadySelected = (option: SelectOption) => {
        const isSelectedAlready = value.find((val) => val.value === option.value);
        return isSelectedAlready ? true : false;
    };

    return <div className="multiselect" onClick={handleOpenAndClose}>

            <div className="multiselect_selected-options-wrapper">

                {value.length > 0 && value.map((selected) => {
                    return <span className="multiselect_selected-options" key={selected.value}>
                        <span className="multiselect_selected-options-text" onClick={(e)=> e.stopPropagation()}>
                            {selected.label}
                        </span>

                        <span className="multiselect_selected-options-icon" onClick={(e)=> handleRemoveOption(selected, e)}>
                            <RxCross2 />
                        </span>
                    </span>
                    })
                }

            </div>

            <div className="multiselect_selection-icons-wrapper">
                <span onClick={(e) => handleEmptyList(e)}><RxCross2 /></span>
                <span><RxDividerVertical /></span>
                <span><RxChevronDown /></span>
            </div>

            <div className={`multiselect_options-list-wrapper ${isOpen ? 'multiselect_options-list--show' : 'multiselect_options-list--hidden'}`}>

                {options.map((option) => {
                    return <span key={option.value} className={`multiselect_options-list-option ${isAlreadySelected(option) ? 'multiselect_options-list-option-selected' : ''}`} onClick={(e)=>{ handleUpdateList(option,e) }}>
                        {option.label}
                    </span>
                })}

                {options.length == 0 && <span className="multiselect_options-not-found">No Options Found..</span>}

            </div>

        </div>
}

export default index