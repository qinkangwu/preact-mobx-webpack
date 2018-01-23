import {h, Component} from 'preact';
import style from './style.less';
import {observer, inject} from "mobx-preact";
import Layout from '../layout/index';

@inject('countStore')
@observer
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.refs = {};
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Layout paddingApp={false}>
                <div class={style.container}>
                    <div class={style.headLocation}>当前所在的位置:神州智慧天地<span class={style.icon1}></span></div>
                    <div class={style.searchDiv}><input type="text" placeholder="请输入搜索产品" /><span class={style.icon2}></span></div>
                    <div class={style.bottomDiv}></div>
                    <div class={style.bannerWrap}>
                        <div class={style.topBanner}></div>
                        <div class={style.bottomBanner}></div>
                    </div>
                </div>
            </Layout>
        )
    }
}
    