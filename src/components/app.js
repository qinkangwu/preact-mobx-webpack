import { h, Component } from 'preact';
import { Router } from 'preact-router';
import {createHashHistory} from 'history';
import AsyncRoute, { loadComponent } from '../lib/asyncRoute';


import Index from './index';

const ProfileComponent = ()=> System.import('./profile');
ProfileComponent.cname = 'profile';

const HomeComponent = ()=> System.import('./index');
HomeComponent.cname = 'index';

const AboutComponent = ()=> System.import('./about');
AboutComponent.cname = 'about';

const hashHistory = createHashHistory();
const _loading = (hideLoading) => {
    const loadingDom = document.querySelector('.page_init_loading');
    if (!loadingDom) return;
    if (hideLoading) {
        loadingDom.classList.add('fadeOut');
        setTimeout(_ => loadingDom.style.zIndex = -1, 360);
    } else {
        loadingDom.classList.remove('fadeOut');
        loadingDom.style.zIndex = 1;
    }
};

export default class App extends Component {
    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute (e){};

    render() {
	return (
	    <Router history={hashHistory} onChange={this.handleRoute}>
            
            <AsyncRoute path="/" cname="home" component={loadComponent(HomeComponent)} loading={_loading} />
            <AsyncRoute path="/profile" cname="profile" component={loadComponent(ProfileComponent)} loading={_loading} />
            <AsyncRoute path="/about" cname="about" component={loadComponent(AboutComponent)} loading={_loading} />
            <Index default />
            </Router>
	);
    }
}
