// MobileSubMenu.tsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface MobileSubMenuProps {
  onClose: () => void;
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ onClose }) => (
  <ul className="submenu text-md">
    <li>
      <Link href="/graphene-platform-overview" className="text-gray-400 hover:text-white" onClick={onClose}>
        Platform Overview <span className="text-sm"> <FontAwesomeIcon icon={faAngleLeft} /> </span>
      </Link>
    </li>
    <li>
      <Link href="/product-category-2" className="text-white" onClick={onClose}>
        Data Access Control
      </Link>
    </li>
    {/* Add more submenu items as needed */}
    <li>
      <button className="back-button" onClick={onClose}>
        <FontAwesomeIcon icon={faAngleLeft} /> Back
      </button>
    </li>
  </ul>
);

export default MobileSubMenu;
