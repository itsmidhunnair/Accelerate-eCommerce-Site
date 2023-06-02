import { Link } from 'react-router-dom'

const FooterColumn = ({ column }) => {
  return (
    <>
      <div>
        <div className="text-md font-bold uppercase tracking-wide text-white">
          {column?.head}
        </div>

        <ul className="mt-2">
          {column?.list.map((item) => (
            <li className="mt-3 text-sm text-gray-400" key={item.title}>
              <Link to={item.link}>
                <span className="hover:text-red-700">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FooterColumn
