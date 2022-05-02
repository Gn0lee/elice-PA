import styled from 'styled-components';

export const SearchHeader = styled.div``;
export const SearchIConInputContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 100%;
`;
export const SearchIConInputInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
`;
export const SearchIconContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
`;
export const SearchInput = styled.input`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  border: none;
  background: transparent;
  line-height: 1.5;
  font-family: inherit;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
export const SearchMarginBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0px;
`;
export const SearchSpace = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  margin: 0px 0px 0.625rem;
  padding: 0px;
`;
export const SearchFilterContainer = styled.div`
  border: 1px solid rgb(225, 226, 228);
`;
export const SearchFilterBox = styled.div`
  border-bottom: 1px solid rgb(225, 226, 228);
  background-color: rgb(255, 255, 255);
  display: flex;
  box-sizing: border-box;
`;
export const SearchFilterLastBox = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  box-sizing: border-box;
`;
export const FilterCategoryBox = styled.div`
  width: 6px;
  display: flex;
  min-width: 6rem;
  padding: 0.875rem 1rem;
  background-color: rgb(249, 250, 252);
  border-right: 1px solid rgb(225, 226, 228);
  box-sizing: border-box;
`;
export const CategoryName = styled.div`
  line-height: 1.5;
  user-select: auto;
  font-size: 0.75rem;
  color: #5e5f61;
  font-weight: 700;
  display: inline-block;
`;
export const FilterBtnBox = styled.div`
  padding: 0px 0.5rem;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
`;
export const FilterBtn = styled.button<{ selected: boolean }>`
  margin: 0.5rem;
  ${(props) => (props.selected ? `color: rgb(249,250,252);` : `color: rgb(94, 95, 97);`)}
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(240, 241, 243);
  font-weight: normal;
  transition: all 150ms ease-in-out 0s;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;
  ${(props) => (props.selected ? `background: rgb(82, 79, 161);` : `background: rgb(240, 241, 243);`)}

  &:hover {
    ${(props) =>
      props.selected
        ? `
    color: rgb(240, 241, 243);
    background: rgb(66, 63, 140);
    border-color: rgb(66, 63, 140);
    `
        : `
    color: rgb(0, 0, 0);
    background: rgb(225, 226, 228);
    border-color: rgb(225, 226, 228);
    `}
  }
`;
export const FilterBtnSpan = styled.span`
  line-height: 1.5;
`;
