import { h } from 'preact';
import style from './style.less';
import Header from '../header';

export default () => {
    return (
	<div class={style.home}>
        <Header />
	<h1>Home</h1>
	<p>This is the Home component.</p>
	</div>
    );
};
