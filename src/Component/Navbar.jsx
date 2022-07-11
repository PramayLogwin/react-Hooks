import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
      <ul>

        <li><Link to="/hoc">HOC</Link></li>
        <li><Link to="/useState">Use State</Link></li>
        <li><Link to="/useEffect">Use Effect</Link></li>
        <li><Link to="/dependency">Dependency</Link></li>
        <li><Link to="/ref">Use Ref</Link></li>
        <li><Link to="/memo">Use Memo</Link></li>
        <li><Link to="/callback">Use Callback</Link></li>
        <li><Link to="/context">Use Context</Link></li>
        <li><Link to="/reducer">Use Reducer</Link></li>
        <li><Link to="/customhook">Use Custom Hook</Link></li>
        <li><Link to="/UseLayoutEffect">Use Layout Effect</Link></li>
        <li><Link to="/UseTransition">Use Transition</Link></li>
      </ul>
    </>
  )
}
