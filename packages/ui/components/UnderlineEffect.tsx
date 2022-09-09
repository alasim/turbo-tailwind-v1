import React from "react"

export default function UnderlineEffect() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <a
          href="#"
          className="font-display max-w-sm text-2xl font-bold leading-tight">
          <span className="link link-underline link-underline-black text-black">
            {" "}
            Hover to See the Effect{" "}
          </span>
        </a>
        <br />
        <br />
        <a
          href="#"
          className="font-display max-w-sm text-2xl font-bold leading-tight">
          <span className="link link-underline link-underline-black text-black">
            {" "}
            Multi line text will <br />
            work fine too.
          </span>
        </a>
      </div>
    </div>
  )
}
