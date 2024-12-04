import { render, screen} from '@testing-library/react'
import Greeting from './Component/Greeting'

describe("Greeting Component", () => {
    it("render correct greeting message" , () => {
        render(<Greeting  name="shyam"/>)
        const greetingElement = screen.getByText(/hello shyam/i)
        expect(greetingElement).toBeInTheDocument
    })
    it('renders different greeting message based on props', () => {
        render(<Greeting name="Alice" />)
        const greetingElement = screen.getByText(/hello alice/i)
        expect(greetingElement).toBeInTheDocument
      });

})
