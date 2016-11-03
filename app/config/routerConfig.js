
import HomeComponent from '../m_home/HomeComponent.js';
import AddComponent from '../m_add/AddComponent.js';

const allRouter = [
	{
        router: 'home',
        name: '我的资产',
        componentName: HomeComponent,
        showLeftBtn: false,
        showRightBtn: true
    },
	{
        router: 'add',
        name: '添加资产',
        componentName: AddComponent,
        showLeftBtn: true,
        showRightBtn: false
    }
];

const getRouter = function(_router){
	for(let n of allRouter){
		if (n.router == _router) {
			return n;
		}
	}
}

module.exports = getRouter;