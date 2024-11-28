"use client"

import useApp from "@/hooks/useUserCredits"

export default function DownloadImage() {

  const { values: { bgRemovedImage } } = useApp()

  return (
    <a 
      className="result_page_button inline-block flex-center text-white bg-gradient-violet-fuchsia"
      href={bgRemovedImage}
      download
    >
      Download image
    </a>
  )
}
