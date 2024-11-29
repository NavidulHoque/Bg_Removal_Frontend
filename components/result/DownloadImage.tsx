"use client"

import useImage from "@/hooks/useImage"

export default function DownloadImage() {

  const { values: { bgRemovedImage } } = useImage()

  return (
    <a 
      className="result_page_button flex-center text-white bg-gradient-violet-fuchsia"
      href={bgRemovedImage}
      download
    >
      Download image
    </a>
  )
}
