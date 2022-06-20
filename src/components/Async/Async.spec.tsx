//aprendendo a usar testes de forma assincrona.
import { render, screen } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
    render(<Async />)

    expect(screen.getByText('Hellow World')).toBeInTheDocument()
    expect(await screen.findByText('Button')).toBeInTheDocument() 
});




//outra forma de usar teste de forma assincrona =>

/*
import { render, screen } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
    render(<Async />)

    expect(screen.getByText('Hellow World')).toBeInTheDocument()

    await waitFor(() => {
        return expect(screen.getByText('Button')).toBeInTheDocument()
    }) 
});
*/
