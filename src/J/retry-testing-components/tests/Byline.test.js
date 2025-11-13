// ~/tests/Byline.test.js

// We want a <Byline author="Some Author"
//                   githubUsername="SomeContributor"
//                   website="somecontributor.github.io" />

import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import Byline from '../components/Byline';

test('byline should include the author name', () => {
    render(<Byline author="Dan Gilleland" />);
    const someElement = screen.getByText("by Dan Gilleland");
    expect(someElement).toBeInTheDocument();
});

test('byline should include some other author name', () => {
    render(<Byline author="Stewart Dent" />);
    const someElement = screen.getByText("by Stewart Dent");
    expect(someElement).toBeInTheDocument();
});

test('byline should include a link to the author GitHub profile', () => {
    render(<Byline author="Stewart Dent"
                   githubUsername="stew-dent" />);
    const someHyperlink = screen.getByText("on GitHub");
    expect(someHyperlink).toBeInTheDocument();
    expect(someHyperlink.href).toBe('https://github.com/stew-dent');
    expect(someHyperlink.target).toBe('_blank');
});

// TODO: Create another test for the website prop
//          website="stew-dent.github.io"
