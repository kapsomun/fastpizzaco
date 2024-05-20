import { Link } from "react-router-dom"

export default function Button({children, onClick, disabled = false, to}) {
  const className = "bg-yellow-400 rounded-full px-3 py-2 text-sm flex w-fit items-center justify-center uppercase  tracking-wide focus:ring-2 focus:ring-yellow-400 focus:outline-none active:bg-yellow-300 active:ring-yellow-300 hover:bg-yellow-300 hover:ring-yellow-300"
  if(to) {
    return(
      <Link to={to} className={className} >{children}</Link>
    )
  }
  return (
    <button disabled={disabled} onClick={onClick} className={className}>{children}</button>
  )
}
