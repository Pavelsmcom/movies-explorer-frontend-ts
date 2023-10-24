interface SubHeaderProps {
  title: string;
}

function SubHeader({ title }: SubHeaderProps) {
  return <h2 className="sub-header">{title}</h2>;
}

export default SubHeader;
