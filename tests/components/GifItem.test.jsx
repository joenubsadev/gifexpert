import { render, screen } from "@testing-library/react"
const { GifItem } = require("../../src/components/GifItem")

describe ('Pruebas en <GifItem.jsx>', () => {
    const title = "Hola titulo";
    const url = "https://holamundo.com/holatitulo"
    test('debe hacer match con snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });

    test('imagen con url y alt indicados', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // console.log ( screen.getByRole('img').src);
        // expect ( screen.getByRole('img').src).toBe( url );
        // expect ( screen.getByRole('img').alt).toBe( title );

        const { src, alt } = screen.getByRole('img')
        expect (src).toBe(url);
        expect (alt).toBe(title);
    })

    test ('debe mostrar el titulo en el componente',  () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})