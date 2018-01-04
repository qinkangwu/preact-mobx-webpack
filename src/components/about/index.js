import { h, Component } from 'preact';
import style from './style.less';
import Header from '../header';
import {observer,inject} from "mobx-preact";

@inject('countStore')
@observer
export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            asd:'123'
        }
    }
    // gets called when this route is navigated to
    componentDidMount() {}

    // gets called just before navigating away from the route
    componentWillUnmount() {}
    
    // Note: `user` comes from the URL, courtesy of our router
    render(props,state) {
        console.log(props,state)
	return (
	    <div class={style.profile}>
            <Header />
	    <h1>Profile: {props.countStore.count}</h1>
	    </div>
	);
    }
}
