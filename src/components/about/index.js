<<<<<<< HEAD
import {h, Component} from 'preact';
import style from './style.less';
import Header from '../header';
import {observer, inject} from "mobx-preact";
=======
import { h, Component } from 'preact';
import style from './style.less';
import Header from '../header';
import {observer,inject} from "mobx-preact";
>>>>>>> aeb3f5254705ca70f70a837da013f1c75bd4c22e

@inject('countStore')
@observer
export default class About extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            asd: '123'
=======
    constructor(props){
        super(props);
        this.state = {
            asd:'123'
>>>>>>> aeb3f5254705ca70f70a837da013f1c75bd4c22e
        }
    }
    // gets called when this route is navigated to
    componentDidMount() {}

    // gets called just before navigating away from the route
    componentWillUnmount() {}
<<<<<<< HEAD

    // Note: `user` comes from the URL, courtesy of our router
    render(props, state) {
        return (
            <div class={style.profile}>
                <Header/>
                <h1>Profile: {props.countStore.count}</h1>
            </div>
        );
=======
    
    // Note: `user` comes from the URL, courtesy of our router
    render(props,state) {
        console.log(props,state)
	return (
	    <div class={style.profile}>
            <Header />
	    <h1>Profile: {props.countStore.count}</h1>
	    </div>
	);
>>>>>>> aeb3f5254705ca70f70a837da013f1c75bd4c22e
    }
}
