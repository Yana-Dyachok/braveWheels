type PageLinkProps = {
  classNames: string;
  href: string;
  children: string;
  target?: '_blank'; 
}

const PageLink = ({ classNames, href, children, target }: PageLinkProps) => {
  const btnClassName = `btn ${classNames}`;
  return (
    <a className={btnClassName} href={href} target={target}>
      {children}
    </a>
  );
}

export default PageLink;