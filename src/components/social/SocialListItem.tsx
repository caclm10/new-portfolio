import type { IconifyIcon } from "@iconify/types";
import Icon from "../icon/Icon";

interface SocialListItemProps {
  href: string;
  icon: IconifyIcon;
}

const SocialListItem = ({ href, icon }: SocialListItemProps) => {
  return (
    <a target="_blank" href={href} className="transition hover:text-primary">
      <Icon icon={icon} className="text-4xl" />
    </a>
  );
};

export default SocialListItem;
