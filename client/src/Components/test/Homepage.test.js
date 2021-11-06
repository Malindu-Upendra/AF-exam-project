import React , { Component } from 'react';
import { render , container } from '@testing-library/react';
import LandingPage from "../LandingPage/LandingPage";

describe("Homepage Renders without Crashing" , () => {

    test("Homepage Renders without Crashing", () => {
        const {container} = render(<LandingPage/>);
        console.log(container.outerHTML);
    })

})