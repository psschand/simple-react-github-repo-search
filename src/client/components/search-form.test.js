import React from "react";
import { render, fireEvent} from "@testing-library/react";
import SearchForm from '../components/search-form.component';
import '@testing-library/jest-dom/extend-expect';

it("renders search button correctly", () => {

const {queryByTestId} = render(<SearchForm/>)

expect(queryByTestId('search-button')).toBeTruthy()
expect(queryByTestId('search-button')).not.toBeEmpty()

})

it("renders placeholder text correctly", () => {
    const { queryByPlaceholderText} = render(<SearchForm/>)
    expect(queryByPlaceholderText('search repo')).toBeTruthy()
    })

 describe("input Value",() =>{
     it("updates on change",() =>{
         const {queryByPlaceholderText} = render(<SearchForm/>)

         const searchInput = queryByPlaceholderText('search repo')
         fireEvent.change(searchInput, {target:{value:"test"}})

         expect(searchInput.value).toBe("test")

     } )


 })   