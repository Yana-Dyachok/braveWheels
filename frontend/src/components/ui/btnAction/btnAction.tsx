import './_btnAction.scss';

type BtnActionProps = {
  classNames: string;
  title?: string;
  onClick?: () => void;
};

const BtnAction = ({ classNames, title, onClick }: BtnActionProps) => {
  const btnClassName = `btn-action ${classNames}`;
  return (
    <button
      className={btnClassName}
      type='button'
      title={title}
      onClick={onClick}
    ></button>
  );
};

export default BtnAction;
