import { useState } from "react"
import { Button } from "ui"
import UnderlineEffect from "ui/components/UnderlineEffect"

export default function Web() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1 className="border-l-4 border-purple-700 bg-purple-300 py-3 pl-4 text-purple-700">
        WEB
      </h1>
      <UnderlineEffect />
    </div>
  )
}
