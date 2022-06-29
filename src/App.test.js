import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event'

describe('test header', () => {
test("test header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
})
})

describe('test button', () => {
test("button changes color when clicked", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")

  userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
  expect(colorBtn.textContent).toBe("Change to green")
})
})

describe('test checkbox', () => {
test("checkbox disables button when first clicked, then enables button on second click", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox")

  userEvent.click(checkbox)
  expect(colorBtn).toBeDisabled()

  userEvent.click(checkbox)
  expect(colorBtn).toBeEnabled()
})

test("paragraph text matches checkbox state", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox")
  const para = screen.getByRole("paragraph")

  userEvent.click(checkbox)
  expect(para).toBe("Button is enabled")

  userEvent.click(checkbox)
  expect(para).toBe("Button is disabled")
})
})