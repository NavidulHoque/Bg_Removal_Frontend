"use client"

interface Prop {
  extraStyle: string;
  label: string;
}

export default function Button({extraStyle, label}: Prop) {
  return (
    <button className={`text-18-medium w-[240px] h-[60px] rounded-full hover-scale ${extraStyle}`}>
      {label}
    </button>
  )
}
