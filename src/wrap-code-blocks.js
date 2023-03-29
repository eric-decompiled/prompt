import React from "react"
import { render } from "react-dom"
import { Button, useClipboard } from "@chakra-ui/react"

const CopyToClipboardButton = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Button
      onClick={onCopy}
      position="absolute"
      top={2} // Add a small offset from the top
      right={2} // Add a small offset from the right
      padding="4px 8px"
      backgroundColor="rgba(0, 0, 0, 0.2)"
      color="white"
      fontSize="0.8em"
      cursor="pointer"
      border="none"
      zIndex={1}
      _hover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  )
}

const wrapCodeBlocks = () => {
  const codeBlocks = document.querySelectorAll("pre > code")

  codeBlocks.forEach(codeBlock => {
    const preElement = codeBlock.parentElement

    // Apply positioning styles to the pre element
    preElement.style.position = "relative"

    const code = codeBlock.textContent
    const buttonContainer = document.createElement("div")
    buttonContainer.style.position = "relative"
    buttonContainer.style.top = "0"
    buttonContainer.style.right = "0"
    preElement.appendChild(buttonContainer)

    render(<CopyToClipboardButton code={code} />, buttonContainer)
  })
}

export default wrapCodeBlocks
