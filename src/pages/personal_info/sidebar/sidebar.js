import className from 'classnames/bind';
import styles from './sidebar.module.scss';
import Info from './info'
import Button, {buttonID} from './button'

const cx = className.bind(styles);

function Sidebar(props) {
    return (
        <aside className={cx('wrapper')}>
            <Info/>
            {props.children}
        </aside>
    )
}

export default Sidebar;
export const bID = buttonID;
