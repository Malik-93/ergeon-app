import react, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

import {
    AutoCompleteContainer,
    AutoCompleteIcon,
    Input,
    AutoCompleteItem,
    AutoCompleteItemButton,
    ErrorContainer
} from "./inputStyles";
const Root = styled.div`
  position: relative;
  width: 320px;
`;

interface IData {
    city: string;
    zip_code: number;
}
interface ISearch {
    text: string;
    suggestions: any;
}
interface autoCompleteProps {
    iconColor?: string;
    inputStyle?: react.CSSProperties;
    optionsStyle?: react.CSSProperties;

    data: any[];
}
export const AutoComplete: FC<autoCompleteProps> = ({
    iconColor,
    inputStyle,
    optionsStyle,
    data
}) => {
    const [search, setSearch] = useState<ISearch>({
        text: "",
        suggestions: []
    });

    const [error, setError] = useState('');
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value) return setSearch({ suggestions: [], text: value });
        const isNumber = new RegExp('^[0-9]*$').test(value)
        if (isNumber) {
            setError('')
            let suggestions: object[] = [];
            if (value.length > 0) {
                const regex = new RegExp(`^${value}`, "i");
                suggestions = data.sort().filter((v: IData) => regex.test(`${v.zip_code}`));
            }
            setIsComponentVisible(true);
            setSearch({ suggestions, text: value });
        } else setError('Only numbers are allowed!!')
    };

    const suggestionSelected = (value: IData) => {
        setIsComponentVisible(false);

        setSearch({
            text: `${value.zip_code}`,
            suggestions: []
        });
    };

    const { suggestions } = search;

    return (
        <Root>
            <div
                onClick={() => setIsComponentVisible(false)}
                style={{
                    display: isComponentVisible ? "block" : "none",
                    width: "200vw",
                    height: "200vh",
                    backgroundColor: "transparent",
                    position: "fixed",
                    zIndex: 0,
                    top: 0,
                    left: 0
                }}
            />
            <div>

                <Input
                    id="input"
                    autoComplete="on"
                    value={search.text}
                    onChange={onTextChanged}
                    type={"text"}
                    style={inputStyle}
                    placeholder="Enter zip/postal code..."
                />
            </div>
            {suggestions.length > 0 && isComponentVisible && (
                <AutoCompleteContainer style={optionsStyle}>
                    {suggestions.map((item: IData) => (
                        <AutoCompleteItem key={item.zip_code}>
                            <AutoCompleteItemButton
                                key={item.zip_code}
                                onClick={() => suggestionSelected(item)}
                            >
                                {item.city} - {item.zip_code}
                            </AutoCompleteItemButton>
                        </AutoCompleteItem>
                    ))}
                </AutoCompleteContainer>
            )}
            {
                error &&
                <ErrorContainer style={optionsStyle}>
                    {error}
                </ErrorContainer>
            }
        </Root>
    );
};
