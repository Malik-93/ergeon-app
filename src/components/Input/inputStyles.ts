import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
  width: 320px;
`;

export const baseButtonMixin = css`
  background: none;
  border: none;
  padding: 0;
`;

export const ValueWrapper = styled.input`
  width: 100%;
  padding-left: 8px;
  padding-right: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 1px;
  border: 1px solid #b6c1ce;
  line-height: 32px;
`;

export const AutoCompleteIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  width: 32px;
  transition: all 150ms linear;
  transform: ${(props: any) => (props.isOpen ? "rotate(0.5turn)" : "none")};
  transform-origin: center;
  display: flex;

  svg {
    margin: auto;
  }

  ${ValueWrapper}:focus + & {
    color: ${(props: any) => props.color || "0063cc"};
    fill: ${(props: any) => props.fill || "0063cc"};
  }
`;

export const AutoCompleteContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #b6c1ce;
  border-radius: 5px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
`;
export const ErrorContainer = styled.ul`
  background: #fff;
  padding: 8px 0;
  list-style-type: none;
  min-width: 320px;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid red;
  border-radius: 5px;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: auto;
  z-index: 1;
  color:red
`;

export const AutoCompleteItem = styled.li`
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #ebf4ff;
  }
`;

export const AutoCompleteItemButton = styled.button`
  ${baseButtonMixin} width: 100%;
  line-height: 32px;
  text-align: left;
  &:active {
    outline: none;
    color: #0076f5;
  }
`;
export const Input = styled(ValueWrapper)`
margin:15px 0;
	padding:15px 10px;
	width:100%;
	outline:none;
	border:1px solid #bbb;
	border-radius:10px;
	display:inline-block;
	-webkit-box-sizing:border-box;
	   -moz-box-sizing:border-box;
	        box-sizing:border-box;
    -webkit-transition:0.2s ease all;
	   -moz-transition:0.2s ease all;
	    -ms-transition:0.2s ease all;
	     -o-transition:0.2s ease all;
	        transition:0.2s ease all;

  &:focus {
    border-color: #0063cc;
    outline: none;

  }
`;
