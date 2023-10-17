interface WorkListItemLinkProps {
  href: string;
  name: string;
}

const WorkListItemLink = ({ name, href }: WorkListItemLinkProps) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-2xl mt-2">
        <a target="_blank" href={href} className="hover:underline">
          <span>{name} </span>
          <svg
            className="w-3 h-3 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z"
            />
          </svg>
        </a>
      </h4>
    </div>
  );
};

export default WorkListItemLink;
