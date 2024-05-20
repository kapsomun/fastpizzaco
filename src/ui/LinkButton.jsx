import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({children,to='*'}) {
  const navigate = useNavigate()
  const className = 'text-blue-500 text-sm hover:underline hover:text-blue-600 transition-all duration-300'

  if(to==="-1") {
    return (
<button  onClick={() => navigate(-1)} className={className}>{children}</button>

    )
  }
  return (
    <Link to={to} className={className}>{children}</Link>
  )
}
