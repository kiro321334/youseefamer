export default function Heading({ title, sub, right }) {
  return (<div className="reveal flex items-start justify-between gap-4"><div><h2 className="h2">{title}</h2>{sub && <p className="sub">{sub}</p>}</div>{right}</div>);
}
