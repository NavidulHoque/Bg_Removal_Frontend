"use client"

interface Prop{
    style: string;
    label: string;
}

export default function Button({style, label}: Prop) {
  return (
    <button className={style}>
      {label}
    </button>
  )
}
